import { Component, Input } from '@angular/core';
import { faWeightScale, faScaleUnbalanced, faMedal  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-mid-widgets',
  templateUrl: './mid-widgets.component.html',
  styleUrls: ['./mid-widgets.component.css']
})
export class MidWidgetsComponent {
  @Input() userData: any;

  faWeightScale = faWeightScale;
  faScaleUnbalanced  = faScaleUnbalanced ;
  faMedal = faMedal;

}
