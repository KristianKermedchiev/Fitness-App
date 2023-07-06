import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fitness-App';

  isSideNavCollapsed = false;
  screenWidth = 0;
  shouldShowNav = true;
  shouldShowHeader = true;
  shouldShowFooter = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        console.log('Current URL:', url);
        this.shouldShowNav = !['/', '/login', '/register'].includes(url);
        this.shouldShowHeader = !['/', '/login', '/register'].includes(url);
        this.shouldShowFooter = !['/', '/login', '/register'].includes(url);
        console.log('shouldShowNav:', this.shouldShowNav);
        console.log('shouldShowHeader:', this.shouldShowHeader);
        console.log('shouldShowFooter:', this.shouldShowFooter);
      }
    });
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
