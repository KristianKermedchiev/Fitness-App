import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent {
  nutrient1: string;
  nutrient2: string;
  nutrient3: string;
  nutrient4: string;
  nutrient5: string;
  nutrient6: string;
  weight: string;
  height: string;
  age: string;
  exercise1: string;
  exercise2: string;
  exercise3: string;

  constructor() {
    this.nutrient1 = '';
    this.nutrient2 = '';
    this.nutrient3 = '';
    this.nutrient4 = '';
    this.nutrient5 = '';
    this.nutrient6 = '';
    this.weight = '';
    this.height = '';
    this.age = '';
    this.exercise1 = '';
    this.exercise2 = '';
    this.exercise3 = '';
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
