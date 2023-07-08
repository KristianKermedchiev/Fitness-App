import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  currentUser: User | null = null;
  currentUserEmail: User | null = null;
  userData: any;

  constructor(private authService: AuthService, private router: Router,private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;

      if (this.currentUser) {
        this.userDataService.getUserData(this.currentUser.uid).subscribe((data) => {
          this.userData = data;
        });
      }
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
