import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Type } from '../type';


@Component({
  selector: 'app-department-list',
  template: `
    <h3>
        Department List
      </h3>
      <ul class="items">
        <li (click)="onSelect(department)" *ngFor="let department of departments">
          <span class="badge">{{department.id}}</span> {{department.name}}
        </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router) { }

  departments: Type[]= [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"}
  ]

  onSelect(department:Type){
      this.router.navigate(['/departments',department.id]);     
      console.log("Hello, you clicked");
      
  }

  ngOnInit(): void {
  }



}
