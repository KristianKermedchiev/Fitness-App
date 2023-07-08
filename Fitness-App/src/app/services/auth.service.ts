import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private userDataService: UserDataService) {
    this.currentUser = this.afAuth.authState;
  }

  register(email: string, password: string, confirmPassword: string): Promise<any> {
    if (password !== confirmPassword) {
      return Promise.reject(new Error('Passwords do not match.'));
    }

    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
            dailyCalories: 0,
            dailySteps: 0,
            dailyWater: 0,
            currentWeight: 0,
            weightLastWeek: 0,
            weightGoal: 0,
            sleep: 0,
            workoutRoutine: '',
            macroNutrients: {
              protein: 0,
              carbs: 0,
              fats: 0
            },
            profilePicture: '',
            gender: '',
            height: 0,
            age: 0,
            firstName: '',
            lastName: ''
          };

          // Set user data in Firestore
          return this.firestore.collection('users').doc(user.uid).set(userData)
            .then(() => {
              // Retrieve user data using the UserDataService
              this.userDataService.getUserData(user.uid).subscribe((userData) => {
                // Handle the retrieved user data
                console.log(userData);
                // You can store the user data in a local variable or use it as needed
              });
            });
        } else {
          throw new Error('User is null');
        }
      })
      .catch((error) => {
        // Handle registration error
        throw new Error(error.message);
      });
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser;
  }
}
