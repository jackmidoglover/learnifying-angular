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
  title = 'assnmt-three';

  viewDetails(){
    this.numbers.push(new Date());
    this.showDetails = !this.showDetails;
  
  }
}
