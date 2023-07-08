import { Component, Input } from '@angular/core';
import { faBed, faDumbbell, faShoePrints  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-bottom-widgets',
  templateUrl: './bottom-widgets.component.html',
  styleUrls: ['./bottom-widgets.component.css']
})
export class BottomWidgetsComponent {
  @Input() userData: any;

  faBed = faBed;
  faDumbbell  = faDumbbell ;
  faShoePrints = faShoePrints;

}
