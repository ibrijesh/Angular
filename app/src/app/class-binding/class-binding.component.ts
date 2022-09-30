import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
  
  <h2>
    Welcome {{name}}
  </h2>

  <!-- Normal html class-->
  <h2 class="text-success">Codevolution</h2>
  

  <!-- Class Binding -->

  <h2 [class]="successClass">Codevolution</h2>

  <!-- Both the class  statement ran -->
  <h2 class="text-special" [class]="successClass" >Codevolution</h2>

  <!--  Use class as text-danger if hasError is true -->
  <h2 [class.text-danger]="hasError">Codevolution</h2>

  <!--Ng Class Directive-->
  <h2 [ngClass]="messageClasses">Codevolution</h2>

  `,
  styles: [`
  
  .text-success{
    color:green;
  }
  
  .text-danger{
    color:red
  }

  .text-special{
    font-style:italic
  }
  
  `]
})
export class ClassBindingComponent implements OnInit {


  public name="Codevolution"
  public successClass="text-success"
  public hasError=true
  public isSpecial=true

  public messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial

  }


  constructor() { }

  ngOnInit(): void {
  }

}
