import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    const age = +formValues.age;
    const sex = formValues.sex;
    const height = +formValues.height;
    const weight = +formValues.weight;
    const activity = +formValues.activity;

    let bmr: number;
    if (sex === 'm') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const maintenanceCalories = bmr * activity;

    this.result = maintenanceCalories;
    this.bmr = bmr;
  }
}
