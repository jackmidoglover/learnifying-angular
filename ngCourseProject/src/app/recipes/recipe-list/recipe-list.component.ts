import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  @Output() detailWindow = new EventEmitter<{recipe: Recipe, clicked: boolean}>();
  recipes: Recipe[] = [
    new Recipe("Buffalo Chicken Mac n Cheese", "This is a tasty dish!", "http://lh3.ggpht.com/-jPcwElynjE0/UD1xbzfGflI/AAAAAAAADW4/v0nOlkuq0Wc/Buffalo%252520Chicken%252520Mac%252520%252527n%252520Cheese%252520Recipe%25255B3%25255D.jpg?imgmax=800"),
    new Recipe("Banana Bar Brownies", "A relatively low calorie treat", "https://www.meals.com/imagesrecipes/143506lrg.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

  openDetail(recipeName){
    console.log(recipeName);
    this.recipes.forEach((recipe) => {
      if (recipeName.name === recipe.name){
        console.log("recipe found!" + recipe);
        return this.detailWindow.emit({recipe: recipe, clicked: true});
      }
    }) 
  }
}
