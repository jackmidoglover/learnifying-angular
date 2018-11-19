import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.sass']
})
export class RecipesComponent implements OnInit {
  detailWindowClicked = false;
  recipeDetail;
  constructor() { }

  ngOnInit() {
  }

  openDetailWindow(recipeInfo){
    console.log(recipeInfo);
    this.detailWindowClicked = recipeInfo.clicked;
    this.recipeDetail = recipeInfo.recipe;
  }

}
