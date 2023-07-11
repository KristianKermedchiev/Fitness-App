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

  isError: boolean = false;
  isSuccess: boolean = false;
  nutritionMessage: string = '';
  weightMessage: string = '';
  routineMessage: string = '';

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

    this.nutritionMessage = '';
    this.weightMessage = '';
    this.routineMessage = '';
  }

  async updateNutrition() {
    const user = await this.afAuth.currentUser;

    if (!user) {
      // User is not logged in or UID is unavailable
      return;
    }

    const userUid = user.uid;

    const updateData: { [key: string]: any } = {};

    if (this.proteins !== '') {
      updateData['macroNutrients.proteins'] = this.proteins;
    }

    if (this.carbs !== '') {
      updateData['macroNutrients.carbs'] = this.carbs;
    }

    if (this.fats !== '') {
      updateData['macroNutrients.fats'] = this.fats;
    }

    if (this.dailyCalories !== '') {
      updateData['dailyCalories'] = this.dailyCalories;
    }

    if (this.dailyWaterIntake !== '') {
      updateData['dailyWaterIntake'] = this.dailyWaterIntake;
    }

    this.firestore
      .collection('users')
      .doc(userUid)
      .update(updateData)
      .then(() => {
        this.dailyCalories = '';
        this.proteins = '';
        this.carbs = '';
        this.fats = '';
        this.dailyWaterIntake = '';
        this.isSuccess = true;
        this.isError = false;
        this.nutritionMessage = 'Update Successful!'
      })
      .catch((error) => {
        this.isSuccess = false;
        this.isError = true;
        this.nutritionMessage = 'Error!'
      });
  }

  async updateWeight() {
    const user = await this.afAuth.currentUser;

    if (!user) {
      // User is not logged in or UID is unavailable
      return;
    }

    const userUid = user.uid;

    const updateData: { [key: string]: any } = {};

    if (this.currentWeight !== '') {
      updateData['currentWeight'] = this.currentWeight;
    }

    if (this.lastWeekWeight !== '') {
      updateData['weightLastWeek'] = this.lastWeekWeight;
    }

    if (this.weightGoal !== '') {
      updateData['weightGoal'] = this.weightGoal;
    }

    this.firestore
      .collection('users')
      .doc(userUid)
      .update(updateData)
      .then(() => {
        this.currentWeight = '';
        this.lastWeekWeight = '';
        this.weightGoal = '';
        this.isSuccess = true;
        this.isError = false;
        this.weightMessage = 'Update Successful!'
      })
      .catch((error) => {
        this.isSuccess = false;
        this.isError = true;
        this.weightMessage = 'Error!'
      });
  }

  async updateRoutine() {
    const user = await this.afAuth.currentUser;
  
    if (!user) {
      // User is not logged in or UID is unavailable
      return;
    }
  
    const userUid = user.uid;
    
    const updateData: { [key: string]: any } = {};
  
    if (this.sleep !== '') {
      updateData['sleep'] = this.sleep;
    }
  
    if (this.workoutRoutine !== '') {
      updateData['workoutRoutine'] = this.workoutRoutine;
    }
  
    if (this.steps !== '') {
      updateData['dailySteps'] = this.steps;
    }
  
    this.firestore
      .collection('users')
      .doc(userUid)
      .update(updateData)
      .then(() => {
        this.sleep = '';
        this.workoutRoutine = '';
        this.steps = '';
        this.isSuccess = true;
        this.isError = false;
        this.routineMessage = 'Update Successful!'
      })
      .catch((error) => {
        this.isSuccess = false;
        this.isError = true;
        this.routineMessage = 'Error!'
      });
  }  
}


