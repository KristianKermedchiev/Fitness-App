import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { profileValidator } from 'src/app/utils/validators';

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
  isError: boolean = false;
  isSuccess: boolean = false;
  message: string = '';

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
    this.message = '';
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
      user.updateEmail(this.email)
        .then(() => {
        })
        .catch(() => {
        });
    }

    if (this.profilePicture !== '') {
      updateData['profilePicture'] = this.profilePicture;
    }

    const validateProfileInfo = profileValidator(this.firstName, this.lastName, this.email, this.height, this.age);

    if (!validateProfileInfo) {
      this.isSuccess = false;
      this.isError = true;
      this.message = 'Invalid data!'
      return;
    } else if (this.firstName === '' && this.lastName === '' && this.gender === '' && this.height === '' && this.age === '' && this.email === '' && this.profilePicture === ''){
      return;
    } else {

    this.firestore
      .collection('users')
      .doc(userUid)
      .update(updateData)
      .then(() => {
        this.firstName = '';
        this.lastName = '';
        this.gender = '';
        this.height = '';
        this.age = '';
        this.email = '';
        this.profilePicture = '';
        this.isSuccess = true;
        this.isError = false;
        this.message = 'Update Successful!'
      })
      .catch(() => {
        this.isSuccess = false;
        this.isError = true;
        this.message = 'Error!'
      });
  }
}

  redirectToProfile() {
    this.router.navigate(['/profile']);
  }
}
