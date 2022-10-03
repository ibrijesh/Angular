import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
  


  <div *ngFor="let color of colors">
    <h2>{{color}}</h2>
  </div>

  <br>

  <!-- Displaying indexes-->
  <div *ngFor="let color of colors; index as i">
    <h2>{{i}}.{{color}}</h2>
  </div>

  <br>

  <!-- wheather element first or not -->
  <div *ngFor="let color of colors; first as f">
   <h2>{{f}} {{color}}</h2>
  </div>

  <br>

    <!-- wheather element last or not -->
  <div *ngFor="let color of colors; last as l">
    <h2>{{l}} {{color}}</h2>
  </div>

  <br>

    <!-- wheather element is at odd index or not -->
    <div *ngFor="let color of colors; odd as o">
      <h2>{{o}} {{color}}</h2>
    </div>

    <br>

      <!-- wheather element is at even index or not -->
    <div *ngFor="let color of colors; even as e">
      <h2>{{e}} {{color}}</h2>
    </div>  
  
  
  `,
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  public colors=["red","blue","green","yellow"]

  ngOnInit(): void {
  }

}
