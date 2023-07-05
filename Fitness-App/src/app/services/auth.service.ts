import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) { }

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
          return this.firestore.collection('users').doc(user.uid).set({
            email: user.email,
            // Add additional user fields if needed
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
}