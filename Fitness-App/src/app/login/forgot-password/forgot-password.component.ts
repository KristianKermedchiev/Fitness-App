import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  
  email: string = '';

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  routeToLogin(){
    this.router.navigate(['/login']);
  }

  resetPassword() {
    this.afAuth.sendPasswordResetEmail(this.email)
      .then(() => {
        console.log('password reset');
        // You can show a success message to the user
      })
      .catch((error) => {
        console.error('Error:', error);
        // You can show an error message to the user
      });
  }
}
