import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  declarations: [
    HeaderComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Recipe Book';
}