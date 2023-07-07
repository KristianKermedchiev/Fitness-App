import { Component } from '@angular/core';
import { faUtensils, faShoePrints, faGlassWater  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {

  faUtensils = faUtensils;
  faShoePrints  = faShoePrints ;
  faGlassWater = faGlassWater;
}
