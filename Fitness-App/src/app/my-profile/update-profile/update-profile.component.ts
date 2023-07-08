import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent {
  firstName: string;
  lastName: string;
  gender: string;
  height: string;
  age: string;
  email: string;
  profilePicture: string;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.firstName = '';
    this.lastName = '';
    this.gender = '';
    this.height = '';
    this.age = '';
    this.email = '';
    this.profilePicture = '';
  }

  async updateProfile() {
    const user = await this.afAuth.currentUser;

    if (!user) {
      // User is not logged in or UID is unavailable
      return;
    }

    const userUid = user.uid;

    const updateData: { [key: string]: any } = {};

    if (this.firstName !== '') {
      updateData['firstName'] = this.firstName;
    }

    if (this.lastName !== '') {
      updateData['lastName'] = this.lastName;
    }

    if (this.gender !== '') {
      updateData['gender'] = this.gender;
    }

    if (this.height !== '') {
      updateData['height'] = this.height;
    }

    if (this.age !== '') {
      updateData['age'] = this.age;
    }

    if (this.email !== '') {
      updateData['email'] = this.email;
    }

    if (this.profilePicture !== '') {
      updateData['profilePicture'] = this.profilePicture;
    }

    this.firestore
      .collection('users')
      .doc(userUid)
      .update(updateData)
      .then(() => {
        console.log('Update successful!');

        this.firstName = '';
        this.lastName = '';
        this.gender = '';
        this.height = '';
        this.age = '';
        this.email = '';
        this.profilePicture = '';

        // Handle any additional logic or success messages
      })
      .catch((error) => {
        // Handle the error
      });
  }

  redirectToProfile() {
    this.router.navigate(['/profile']);
  }
}
