import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;


  constructor(private authService: AuthService, private router: Router) { }

  register(form: NgForm) {
    const { email, password, confirmPassword } = form.value;
    this.authService.register(email, password, confirmPassword)
      .then(() => {
        console.log('Registration successful!');
        this.router.navigate(['/login']); // Redirect to Login page.
      })
      .catch((error) => {
        console.error('Registration error:', error);
        // Handle registration error
      });
  }
}
