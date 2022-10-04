import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { Type } from '../type';


@Component({
  selector: 'app-department-list',
  template: `
    <h3>
        Department List
      </h3>
      <ul class="items">
        <li (click)="onSelect(department)"  [class.selected]="isSelected(department)"   *ngFor="let department of departments">
          <span class="badge">{{department.id}}</span> {{department.name}}
        </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {

  public selectedId:any;

  constructor(private router:Router,private route:ActivatedRoute) { }

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
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id;
    })
  }


   isSelected(department:Type){
      department.id==this.selectedId;
   }


}
