import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
  
    <h2> Welcome {{name}}</h2>

    <!-- property binding -->
    <input [id]="myId" type="text"   value="Brijesh">

    <!-- Can we do using interpolation or not ?-->
    <input id="{{myId}}" type="text"   value="Brijesh">

    <!-- Where interpolation will not work-->
    <input disabled={{isDisabled}}  id="{{myId}}" type="text"   value="Brijesh">

    <!-- Normal Html  will not work -->
    <input disabled="false"  id="{{myId}}" type="text"   value="Brijesh">

  `,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  myId="testId";
  name="CR7";
  isDisabled=false;


  constructor() { }

  ngOnInit(): void {
  }

}
