import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
  })
  export class RecipeService {
    constructor(private firestore: AngularFirestore) {}
  
    addRecipe(recipe: any): Promise<DocumentReference<any>> {
      const recipeId = this.firestore.createId();
      const newRecipe = { ...recipe, id: recipeId };
  
      return this.firestore.collection('recipes').doc(recipeId).set(newRecipe)
        .then(() => this.firestore.collection('recipes').doc(recipeId).ref);
    }
  }
  
  
