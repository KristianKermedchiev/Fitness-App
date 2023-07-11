import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { errorParser } from '../utils/errorParser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email!: string;
  password!: string;
  confirmPassword!: string;
  error: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(form: NgForm) {
    const { email, password, confirmPassword } = form.value;
    this.authService.register(email, password, confirmPassword)
      .then(() => {
        this.router.navigate(['/login']); 
      })
      .catch((error) => {
        this.error = errorParser(error);
      });
  }
}
