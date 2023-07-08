import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {
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

  async updateNutrition() {
    const user = await this.afAuth.currentUser;
    
    if (!user) {
      // User is not logged in or UID is unavailable
      return;
    }

    const userUid = user.uid;

    const nutritionData = {
      proteins: this.proteins,
      carbs: this.carbs,
      fats: this.fats,
    };

    const dailyCalories = this.dailyCalories;
    const dailyWaterIntake = this.dailyWaterIntake;

    console.log('Update successful!');

    this.firestore.collection('users').doc(userUid).update({ macroNutrients: nutritionData, dailyCalories: dailyCalories, dailyWaterIntake: dailyWaterIntake  })
      .then(() => {
        // Clear the form fields
        this.dailyCalories = '';
        this.proteins = '';
        this.carbs = '';
        this.fats = '';
        this.dailyWaterIntake = '';

        // Handle any additional logic or success messages
      })
      .catch((error) => {
        // Handle the error
      });
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


