import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  constructor(private authService: AuthService, private router: Router) { }

  logout(): void {
    this.authService.logout()
      .then(() => {
        console.log('Logged out!');
        this.router.navigate(['/']); 
      })
      .catch((error) => {
        console.log('Logout error:', error);
      });
  }
}
