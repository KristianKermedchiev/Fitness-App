import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent {
  dailyCalories: number = 0;
  dailySteps: number = 0;
  dailyWater: number = 0;
  currentWeight: number = 0;
  lastWeek: number = 0;
  goalWeight: number = 0;
  sleep: number = 0;
  workoutRoutine: number = 0;
  proteins: number = 0;
  carbs: number = 0;
  fats: number = 0;

  submitForm() {
    // You can perform any logic here to handle the form submission
    console.log('Form submitted:', this.dailyCalories, this.dailySteps, this.dailyWater, 
    this.currentWeight, this.lastWeek, this.goalWeight, this.sleep, this.workoutRoutine, this.proteins,
    this.carbs, this.fats);
  }
}
