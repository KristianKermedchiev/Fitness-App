import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { calculatorValidator } from '../utils/validators';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.css']
})
export class CalorieCalculatorComponent {
  showCalculator = true;
  result: number | null = null;
  bmr: number | null = null;
  calorieForm: FormGroup;
  isError: boolean = false;
  nutritionMessage: string = '';


  constructor(private formBuilder: FormBuilder) {
    this.calorieForm = this.formBuilder.group({
      age: '',
      sex: '',
      height: '',
      weight: '',
      activity: ''
    });
  }

  calculateBMR(): void {
    const formValues = this.calorieForm.value;
    const age = formValues.age;
    const sex = formValues.sex;
    const height = formValues.height;
    const weight = formValues.weight;
    const activity = formValues.activity;

    const isNutritionValid = calculatorValidator(age, sex, height, weight, activity);

    if (!isNutritionValid) {
      this.isError = true;
      this.nutritionMessage = 'Invalid data!'

      setTimeout(() => {
        this.isError = false;
        this.nutritionMessage = '';
      }, 5000);
      
      return;
    }

    let bmr: number;
    if (sex === 'm') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenanceCalories = bmr * activity;

    const roundedMaintenanceCalories = maintenanceCalories.toFixed(2);
    const roundedBMR = bmr.toFixed(2);

    this.result = +roundedMaintenanceCalories;
    this.bmr = +roundedBMR;
  }
}
