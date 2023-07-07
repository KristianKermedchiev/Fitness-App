import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.currentUser = this.afAuth.authState;
  }

  register(email: string, password: string, confirmPassword: string): Promise<any> {
    if (password !== confirmPassword) {
      return Promise.reject(new Error('Passwords do not match.'));
    }
  
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User registration successful
        const user = userCredential.user;
        if (user) {
          // Save additional user information to Firestore
          const userData = {
            uid: user.uid,
            email: user.email,
            weight: 0,
            dailyCalories: 0,
            dailySteps: 0,
            weightGoal: 0
          };
  
          return this.firestore.collection('users').doc(user.uid).set(userData);
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
