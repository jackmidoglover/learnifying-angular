import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Recipe Book';
  recipeOpen = false;
  shoppingListOpen = false; 

  openComponent(component){
    if (component.name === 'recipe') {
    this.recipeOpen = !this.recipeOpen;
  } else if (component.name === 'shoppingList'){
    this.shoppingListOpen = !this.shoppingListOpen;
  }
  }

}
