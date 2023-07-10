import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, switchMap } from 'rxjs/operators';

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
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recipeId: string | null = null;
  recipe$: Observable<any> | undefined;
  isOwner = false;

  constructor(
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      this.recipe$ = this.firestore
        .collection('recipes')
        .doc(this.recipeId)
        .valueChanges();

      this.afAuth.authState
        .pipe(
          switchMap((user) =>
            this.firestore
              .collection('recipes')
              .doc<Recipe>(this.recipeId || undefined)
              .valueChanges()
              .pipe(
                map((recipe) => ({ recipe, user }))
              )
          )
        )
        .subscribe(({ recipe, user }) => {
          if (recipe && user) {
            this.isOwner = recipe.owner === user.uid;
          }
        });
    }
  }

  redirectToRecipes() {
    this.router.navigate(['recipes']);
  }

  routeToEdit() {
    if (this.recipeId) {
      this.router.navigate(['recipes/details', this.recipeId, 'edit']);
    }
  }

  confirmDelete() {
    const confirmed = confirm('Are you sure you want to delete this recipe?');
    if (confirmed && this.recipeId) {
      this.firestore.collection('recipes').doc(this.recipeId).delete()
        .then(() => {
          console.log('Recipe deleted successfully!');
          this.router.navigate(['recipes']);
        })
        .catch((error) => {
          console.error('Error deleting recipe:', error);
        });
    }
  }
}
