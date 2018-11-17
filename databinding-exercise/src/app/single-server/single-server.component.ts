import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-server',
  templateUrl: './single-server.component.html',
  styleUrls: ['./single-server.component.css']
})
export class SingleServerComponent implements OnInit {
  serverId = '10';
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  
   }

  ngOnInit() {
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
