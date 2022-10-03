import { Type } from '../type';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  template: `
  
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
        

  `,
  styleUrls: ['./employees-list.component.css']
})


export class EmployeesListComponent implements OnInit {


  public employees: Type[]=[];

  constructor(private _employeeService:EmployeeService) {
    
   }


   ngOnInit(): void {
    this._employeeService.getEmployees()
         .subscribe(data=>this.employees=data); 
  }

}
