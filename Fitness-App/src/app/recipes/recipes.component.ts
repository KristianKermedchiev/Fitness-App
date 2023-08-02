import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipesCollection: AngularFirestoreCollection<any>;
  recipes: Observable<any[]>;

  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private loadingService: LoadingService
  ) {
    this.recipesCollection = this.firestore.collection('recipes');
    this.recipes = this.recipesCollection.valueChanges();
  }

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.loadingService.show(); 
    this.recipes.subscribe((recipes) => {
      this.loadingService.hide(); 
    });
  }

  redirectToCreateRecipe() {
    this.router.navigate(['recipes/create']);
  }

  redirectToRecipeDetails(recipeId: string) {
    this.router.navigate(['recipes/details', recipeId]);
  }
  
  isLoading(): boolean {
    return this.loadingService.isLoading();
  }
}
