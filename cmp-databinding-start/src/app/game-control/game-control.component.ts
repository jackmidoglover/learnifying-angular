import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStart = new EventEmitter<{number: number}>();
  number = 0;
  timerId;
  constructor() { }

  ngOnInit() {
  }

    onGameStart(){
      console.log("game started");
      this.timerId = setInterval(()=>{ 
        this.number++;
        this.gameStart.emit({number: this.number})
      }, 1000);
    }
    onGameStop(){
      clearInterval(this.timerId);
    }
}
