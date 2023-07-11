import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { errorParser } from 'src/app/utils/errorParser';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  email: string = '';
  isError: boolean = false;
  isSuccess: boolean = false;
  message: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  routeToLogin() {
    this.router.navigate(['/login']);
  }

  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        this.isSuccess = true;
        this.isError = false;
        this.message = 'Please check your email!';
      })
      .catch((error) => {
        console.log(error);
        this.isSuccess = false;
        this.isError = true;
        this.message = errorParser(error);
      });
  }
}
