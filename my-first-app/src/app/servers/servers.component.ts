import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!';
  serverName='Testserver';
constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
}
ngOnInit(){
  
}
onCreatedServer(){
  this.serverCreationStatus = "server was created";
}
OnUpdateServerName(event:Event){

  this.serverName = (<HTMLInputElement>event.target).value
}
  
}
