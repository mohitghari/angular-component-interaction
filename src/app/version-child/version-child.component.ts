import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-version-child',
  templateUrl: './version-child.component.html',
  styleUrls: ['./version-child.component.css']
})
export class VersionChildComponent implements OnChanges {
    
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];


  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(changes)
    let log: string[] = [];
    for (let propName in changes) {
      //console.log(propName);
      let changedProp = changes[propName];
      //console.log(changedProp)
      let to = changedProp.currentValue;
    //  console.log(to);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = changedProp.previousValue;
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }


}
