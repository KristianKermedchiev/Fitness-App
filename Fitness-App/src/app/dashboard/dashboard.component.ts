import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: User | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      // additional logic here;
    });
  }
}
