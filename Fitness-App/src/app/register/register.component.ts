import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }

  register(email: string, password: string, confirmPassword: string) {

    this.authService.register(email, password, confirmPassword)

      .then(() => {
        console.log('Registration successful!');
        this.router.navigate(['/']);
      })

      .catch((error) => {
        // Handle registration error here!
        console.error('Registration error:', error);
      });
  }
}