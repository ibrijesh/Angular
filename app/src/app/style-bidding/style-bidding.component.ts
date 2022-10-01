import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-style-bidding',
  template: `
  
  <h2>Welcome {{name}}</h2>

  <!-- Simply assigning color -->

  <h2 [style.color]="'orange'">Style Binding</h2>

  <!-- Based on ternary operator conditions -->

  <h2 [style.color]="hasError ?'red':'green'">Style Binding</h2>

  <!-- Assigning normal variable-->

  <h2 [style.color]="highlightColor">Style Binding</h2>

  <!-- using Ng style Directive by assigning object -->
  <h2 [ngStyle]="titleStyles">Style Binding</h2>

  
  `,
  styleUrls: []
})
export class StyleBiddingComponent implements OnInit {

  constructor() { }

  public name="Codevolution"
  public hasError=true
  public isSpecial=true
  public highlightColor="Yellow"
  public titleStyles={
    color:"blue",
    fontStyle:"italic"
  }

  ngOnInit(): void {
  }

}
