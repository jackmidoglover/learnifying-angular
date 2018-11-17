import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .blue {
      background-color: blue
    }
  `]
})
export class AppComponent {

  showDetails = false;
  numbers = [];
  number = 0;
  title = 'assnmt-three';

  viewDetails(){
    this.number++;
    this.numbers.push(this.number);
    this.showDetails = true;
  }
}
