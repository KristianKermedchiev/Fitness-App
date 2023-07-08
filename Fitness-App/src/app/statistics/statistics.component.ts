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
  async updateWeight() {
    const user = await this.afAuth.currentUser;
    
    if (!user) {
      // User is not logged in or UID is unavailable
      return;
    }

    const userUid = user.uid;

    const currentWeight = this.currentWeight;
    const weightLastWeek = this.lastWeekWeight;
    const weightGoal = this.weightGoal;

    console.log('Update successful!');

    this.firestore.collection('users').doc(userUid).update({ weightGoal: weightGoal, weightLastWeek: weightLastWeek, currentWeight: currentWeight  })
      .then(() => {
        // Clear the form fields
        this.currentWeight = '';
        this.lastWeekWeight = '';
        this.weightGoal = '';
        // Handle any additional logic or success messages
      })
      .catch((error) => {
        // Handle the error
      });
  }

  async updateRoutine() {
    const user = await this.afAuth.currentUser;
    
    if (!user) {
      // User is not logged in or UID is unavailable
      return;
    }

    const userUid = user.uid;

    const sleep = this.sleep;
    const workoutRoutine = this.workoutRoutine;
    const steps = this.steps;

    console.log('Update successful!');

    this.firestore.collection('users').doc(userUid).update({ sleep: sleep, workoutRoutine: workoutRoutine, dailySteps: steps  })
    .then(() => {
      // Clear the form fields
      this.sleep = '';
      this.workoutRoutine = '';
      this.steps = '';
      // Handle any additional logic or success messages
    })
    .catch((error) => {
      // Handle the error
    });
  }
}


