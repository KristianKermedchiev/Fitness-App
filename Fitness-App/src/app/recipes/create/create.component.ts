import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { AuthService } from 'src/app/services/auth.service';
import { recipeValidator } from 'src/app/utils/validators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  recipe: any = {};
  
  isError: boolean = false;
  message: string = '';

  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  createRecipe() {
    this.authService.getCurrentUser().subscribe((currentUser) => {
      if (currentUser) {
        const { name, difficulty, spicy, vegan, picture, description } = this.recipe;

        const isValidRecipe = recipeValidator(name, difficulty, spicy, vegan, picture, description);

        if (!isValidRecipe) {
          this.isError = true;
          this.message = 'Invalid data!'
          return;
        }

        const recipe = { ...this.recipe };
        recipe.owner = currentUser.uid;

        this.recipeService.addRecipe(recipe)
          .then((docRef) => {
            console.log('Recipe document written with ID:', docRef.id);
            // Optionally, display a success message to the user or navigate to a success page
            this.router.navigate(['recipes']);
          })
          .catch((error) => {
            console.error('Error adding recipe document:', error);
            // Display an error message to the user
          });
      } else {
        console.error('User is not authenticated');
        // Handle the case when the user is not authenticated
      }
    });
  }

  redirectToRecipes() {
    this.router.navigate(['recipes']);
  }
}
