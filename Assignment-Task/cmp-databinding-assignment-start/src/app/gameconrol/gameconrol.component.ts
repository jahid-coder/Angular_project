import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gameconrol',
  templateUrl: './gameconrol.component.html',
  styleUrls: ['./gameconrol.component.css']
})
export class GameconrolComponent implements OnInit{
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber=0;

  constructor(){

  }
  ngOnInit() {
    
  }
  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber ++;
    
    },1000);
    
  }

  onPauseGame(){
    clearInterval(this.interval)

  }
}
