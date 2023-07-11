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
  error: string = '';
  success: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  routeToLogin(){
    this.router.navigate(['/login']);
  }

  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        this.success = 'Please check your email!';
      })
      .catch((error) => {
        console.log(error)
        this.error = errorParser(error);
      });
  }
}
