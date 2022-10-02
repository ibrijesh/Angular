import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
  
  <input [(ngModel)]="name"  type="text">
  {{name}}
  
  `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  public name="Codevolution"

  ngOnInit(): void {
  }

}
