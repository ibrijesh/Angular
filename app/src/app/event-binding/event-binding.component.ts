import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template:`
  
  <h2>Welcome {{name}}</h2>
  
  <button (click)="onClick()">Greet</button>

  <br>

  <!-- Passing the argument to the class function-->

  <button (click)="onClickParam($event)">See event details</button>

  <br>

  <!-- Assigning variable-->
  <button (click)="greeting='Welcome to Mysore'">Greet</button>
  <br>
  
  {{greeting}}
  
  `,
  styleUrls: []
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  public name="Codevolution"
  public greeting=""

  ngOnInit(): void {
  }

  onClick(){

    console.log("Greetings, from Brijesh");
    this.greeting="Welcome to Codevolution"     

  }

  onClickParam(event: any){

    console.log(event);

  }

}
