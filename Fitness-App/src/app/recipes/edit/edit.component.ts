import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { recipeValidator } from 'src/app/utils/validators';

interface Recipe {
  owner: string;
  description: string;
  difficulty: string;
  id: string;
  name: string;
  picture: string;
  spicy: string;
  vegan: string;
  
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  recipeId: string | null = null;
  recipe: Recipe | undefined = {
    description: '',
    difficulty: '',
    id: '',
    name: '',
    owner: '',
    picture: '',
    spicy: '',
    vegan: ''
  };
    isError: boolean = false;
    message: string = '';

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      this.firestore
        .collection('recipes')
        .doc<Recipe>(this.recipeId)
        .valueChanges()
        .subscribe((recipe) => {
          if (recipe) {
            this.recipe = recipe;
          }
        });
    }
  }

  redirectToRecipes() {
    if (this.recipeId) {
      this.router.navigate(['recipes/details', this.recipeId]);
    }
  }

  updateRecipe(form: any) {
    if (this.recipeId && this.recipe) {
      const { name, difficulty, spicy, vegan, picture, description } = form;

      const isValidRecipe = recipeValidator(name, difficulty, spicy, vegan, picture, description);

      if (!isValidRecipe) {
        this.isError = true;
        this.message = 'Invalid data!'
        return;
      }

      const updatedRecipe: Recipe = {
        ...this.recipe,
        name,
        difficulty,
        spicy,
        vegan,
        picture,
        description
      };

      this.firestore
        .collection('recipes')
        .doc(this.recipeId)
        .set(updatedRecipe)
        .then(() => {
          console.log('Recipe updated successfully!');
          this.redirectToRecipes();
        })
        .catch((error) => {
          console.error('Error updating recipe:', error);
        });
    }
  }
}
