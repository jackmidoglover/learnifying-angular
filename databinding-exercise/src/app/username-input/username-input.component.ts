import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {

  username = '';
  inputAbility = false;
  constructor() { }
  checkInput(){
    if (this.username !== "") {
      this.inputAbility = true;
    }
  }
  ngOnInit() {
  }

  onSubmit(event : Event){
    this.username = '';
    this.inputAbility = false;
  }
}
