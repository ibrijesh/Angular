import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  template: `


  <div [ngSwitch]="color">

      <div *ngSwitchCase="'red'"> You have choosen red color</div>
      <div *ngSwitchCase="'blue'"> You have choosen blue color</div>
      <div *ngSwitchCase="'yellow'"> You have choosen yellow color</div> 

  </div>
  
  
  `,
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {

  constructor() { }

  color="blue"

  ngOnInit(): void {
  }

}
