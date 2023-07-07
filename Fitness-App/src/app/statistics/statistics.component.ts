import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent {
  isAccordionExpanded = false;
  formData: any = {};

  toggleAccordion(): void {
    this.isAccordionExpanded = !this.isAccordionExpanded;
  }

  submitForm(): void {
    console.log('Form submitted:', this.formData);
  }
}
