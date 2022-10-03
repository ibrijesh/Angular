import { TemplateReferenceVariableComponent } from './../template-reference-variable/template-reference-variable.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
  
    <!-- if ngIf is true then it will render Codevolution-->
    <h2 *ngIf="true">
        Codevolution
    </h2>


    <!-- if ngIf is false then HTML element will not be visible even when using inspect in browser.-->
    <h2 *ngIf="false">
      Codevolution
    </h2>

    <!-- Assign variable inplace of boolean value -->

    <h2 *ngIf="displayName">
      Codevolution-displayName
    </h2>

    <!--Using if else block -->

    <h2 *ngIf="displayName; else elseBlock">
        Codevoluton-If-Else
    </h2>

    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>


    <!-- If then or else block  -->


    <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>
        Codevolution-then-Block
      </h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>
        Name is hidden
      </h2>
    </ng-template>

  
  ` ,
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  constructor() { }

  displayName=true

  ngOnInit(): void {
  }

}
