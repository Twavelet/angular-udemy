import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus: string = "No server created yet";
  serverName: string = ''

  constructor(){
    setTimeout(()=> this.allowNewServer = true, 2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created.'
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}