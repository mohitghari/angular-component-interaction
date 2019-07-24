import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent {

  agreed = 0 ;
  disagreed = 0;

  voters = ['mohit','mahek','mukesh']

  onVoted(agreed : boolean){
    agreed ? this.agreed++ : this.disagreed++
  }

  
}
