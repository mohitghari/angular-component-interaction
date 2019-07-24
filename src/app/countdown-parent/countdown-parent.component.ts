import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
//import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component'

@Component({
  selector: 'app-countdown-parent',
  templateUrl: './countdown-parent.component.html',
  styleUrls: ['./countdown-parent.component.css']
})
export class CountdownParentComponent implements AfterViewInit  {
  
  @ViewChild(CountdownTimerComponent, {static: false})
  private timerComponent: CountdownTimerComponent;
 
  seconds() { return 0; }
  ngAfterViewInit(){
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
  constructor() { }
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
 

}
