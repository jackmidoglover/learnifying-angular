import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  serverId = '10';
  serverStatus = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created!";
  }
}
