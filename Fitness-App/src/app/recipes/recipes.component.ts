import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  constructor(private router: Router) {
    
  }
  redirectToCreateRecipe() {
    this.router.navigate(['recipes/create']);
  }

}
