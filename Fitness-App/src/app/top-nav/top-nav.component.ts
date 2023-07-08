import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  currentUser: User | null = null;
  currentUserEmail: User | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

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
