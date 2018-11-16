import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-info-div',
  // directives: [CardComponent],
  templateUrl: './info-div.component.html',
  styleUrls: ['./info-div.component.css']
})
export class InfoDivComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
