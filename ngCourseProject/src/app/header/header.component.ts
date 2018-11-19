import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() recipeClick = new EventEmitter<{name: string}>();
    @Output() shoppingClick = new EventEmitter<{name: string}>();
    openRecipe(){
        this.recipeClick.emit({name: 'recipe'});
    }

    openShoppingList(){
        this.shoppingClick.emit({name: 'shoppingList'});
    }
}