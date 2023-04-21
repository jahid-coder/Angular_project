import { Component , OnInit} from "@angular/core";


@Component ({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
      .online{
        color: white;
      }
    `]

  
})
export class ServerComponent implements OnInit {
    serverId : number= 10;
    serverStatus : string = 'offline';
    serverName='Testserver';
    serverCreated = false;
    showSecret = false;
    servers =['Testserver','Testserver 2'];
    log = [];

    onToggleDetails(){
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length +1)
    }


    getServerStatus(){
        return this.serverStatus;
    }

    allowNewServer = false;
  serverCreationStatus = 'No Server was Created!';
constructor(){
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
}
    ngOnInit(){
  
}
onCreatedServer(){
  this.serverCreated = true;
  this.serverCreationStatus = 'server was created ! Name is ' + this.serverName;
}

OnUpdateServerName(event:Event){

  this.serverName = (<HTMLInputElement>event.target).value
}

getColor(){
  return this.serverStatus ==='online'? 'green' :'red';
}


}