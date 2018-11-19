import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDetail = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  showRecipe(recipeName){
    this.recipeDetail.emit(recipeName);
  }


}
