import { Component } from '@angular/core';
import { faBed, faDumbbell, faCubesStacked  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-bottom-widgets',
  templateUrl: './bottom-widgets.component.html',
  styleUrls: ['./bottom-widgets.component.css']
})
export class BottomWidgetsComponent {

  faBed = faBed;
  faDumbbell  = faDumbbell ;
  faCubesStacked = faCubesStacked;

}
