import { Component, Input } from '@angular/core';
import { faUtensils, faCubesStacked, faGlassWater } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  @Input() userData: any;

  faUtensils = faUtensils;
  faCubesStacked = faCubesStacked;
  faGlassWater = faGlassWater;
}
