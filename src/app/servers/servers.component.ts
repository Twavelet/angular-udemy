import { ThisReceiver } from '@angular/compiler';
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
  userName: string = ''
  paragraph: boolean = false
  clickCount: Array<number> = [0]

  constructor(){
    setTimeout(()=> this.allowNewServer = true, 2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created. The server name is ' + this.serverName
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  clearUsername(){
    this.userName = ''
  }
  displayParagraph(){
    this.paragraph = !this.paragraph;
    this.clickCount.push(this.clickCount[this.clickCount.length-1] + 1)
    console.log(this.clickCount[this.clickCount.length-1])
    console.log(this.clickCount)
  }
}
