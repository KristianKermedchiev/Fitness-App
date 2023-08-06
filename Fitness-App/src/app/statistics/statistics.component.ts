import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { weightValidator } from '../utils/validators';
import { routineValidator } from '../utils/validators';
import { nutritionValidator } from '../utils/validators';

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
      return;
    }

    const userUid = user.uid;

    const isNutritionValid = nutritionValidator(this.dailyCalories, this.proteins, this.carbs, this.fats, this.dailyWaterIntake);

    if (!isNutritionValid) {
      this.isSuccess = false;
      this.isError = true;
      this.nutritionMessage = 'Invalid data!'

      setTimeout(() => {
        this.isError = false;
        this.nutritionMessage = '';
      }, 5000);

      return;
    }

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

        setTimeout(() => {
          this.isSuccess = false;
          this.nutritionMessage = '';
        }, 5000);
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
      return;
    }

    const userUid = user.uid;

    const isWeightvalid = weightValidator(this.currentWeight, this.lastWeekWeight, this.weightGoal);

    if (!isWeightvalid) {
      this.isError = true;
      this.weightMessage = 'Invalid data!'

      setTimeout(() => {
        this.isError = false;
        this.weightMessage = '';
      }, 5000);

      return;
    }

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

        setTimeout(() => {
          this.isSuccess = false;
          this.weightMessage = '';
        }, 5000);
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
      return;
    }
  
    const userUid = user.uid;

    const isRoutineValid = routineValidator(this.sleep, this.workoutRoutine, this.steps);

    if (!isRoutineValid) {
      this.isError = true;
      this.routineMessage = 'Invalid data!'

      setTimeout(() => {
        this.routineMessage = '';
      }, 5000);

      return;
    }
    
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

        setTimeout(() => {
          this.isSuccess = false;
          this.routineMessage = '';
        }, 5000);
      })
      .catch((error) => {
        this.isSuccess = false;
        this.isError = true;
        this.routineMessage = 'Error!'
      });
  }  
}