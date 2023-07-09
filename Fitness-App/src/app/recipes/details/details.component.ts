import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  recipeId: string | null = null; // Initialize the recipeId property

  recipe$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore) {}

  ngOnInit() {
    this.recipeId = this.route.snapshot.paramMap.get('id');
    if (this.recipeId) {
      this.recipe$ = this.firestore.collection('recipes').doc(this.recipeId).valueChanges();
    }
  }
}
