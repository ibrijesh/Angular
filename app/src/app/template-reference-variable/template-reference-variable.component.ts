import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  template: `

  <h2>Welcome {{name}}</h2>
  
  <input #myInput type="text">
  <br>
  <button (click)="logMessage(myInput.value)">Log</button>  

  `,
  styleUrls: ['./template-reference-variable.component.css']
})
export class TemplateReferenceVariableComponent implements OnInit {

  constructor() { }

  public name="Codevolution"

  ngOnInit(): void {
  }


  logMessage(value:any){
    console.log(value);
  }

}
