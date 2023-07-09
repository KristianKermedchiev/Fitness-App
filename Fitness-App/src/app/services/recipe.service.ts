import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    constructor(private firestore: AngularFirestore) { }

    addRecipe(recipe: any): Promise<any> {
        return this.firestore.collection('recipes').add(recipe);
    }
}
