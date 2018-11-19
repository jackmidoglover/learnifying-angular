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
    if (component=== 'recipe') {
    this.recipeOpen = !this.recipeOpen;
  } else if (component === 'shoppingList'){
    this.shoppingListOpen = !this.shoppingListOpen;
  }
  }

}
