import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { User } from '@firebase/auth-types';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  currentUser: User | null = null;
  userData: any;

  constructor(private authService: AuthService, private userDataService: UserDataService, private cdr: ChangeDetectorRef) { }

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
}
