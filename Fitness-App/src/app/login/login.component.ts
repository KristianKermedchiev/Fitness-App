import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { errorParser } from '../utils/errorParser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  routeToRegister() {
    this.router.navigate(['/register']);
  }

  routeToForgotPassword() {
    this.router.navigate(['/resetPassword']);
  }

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      console.log('Logged in successfully!');
      this.router.navigate(['/dashboard']); 
    } catch (error: any) {
      console.error('Error signing in:', error);
      if (typeof error === 'string') {
        this.error = errorParser(error); 
      } else if (error instanceof Error) {
        this.error = errorParser(error.message); 
      } else if (typeof error.message === 'string') {
        this.error = errorParser(error.message); 
      } else {
        this.error = 'Something went wrong';
      }
    }
  }
}
