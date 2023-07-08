import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent {
  dailyCalories: string;
  proteins: string;
  carbs: string;
  fats: string;
  dailyWaterIntake: string;

  currentWeight: string;
  lastWeekWeight: string;
  weightGoal: string;

  sleep: string;
  workoutRoutine: string;
  steps: string;

  constructor() {
    this.dailyCalories = '';
    this.proteins = '';
    this.carbs = '';
    this.fats = '';
    this.dailyWaterIntake = '';

    this.currentWeight = '';
    this.lastWeekWeight = '';
    this.weightGoal = '';

    this.sleep = '';
    this.workoutRoutine = '';
    this.steps = '';
  }

  updateNutrition() {
    // Handle the submit event for updating nutrition
    // Access the nutrient values using this.nutrient1, this.nutrient2, this.nutrient3
    // Perform necessary actions (e.g., API call, data manipulation, etc.)
    // Clear the form fields if needed
  }

  updateWeight() {
    // Handle the submit event for updating weight
    // Access the weight, height, age values using this.weight, this.height, this.age
    // Perform necessary actions (e.g., API call, data manipulation, etc.)
    // Clear the form fields if needed
  }

  updateRoutine() {
    // Handle the submit event for updating routine
    // Access the exercise values using this.exercise1, this.exercise2, this.exercise3
    // Perform necessary actions (e.g., API call, data manipulation, etc.)
    // Clear the form fields if needed
  }
}
