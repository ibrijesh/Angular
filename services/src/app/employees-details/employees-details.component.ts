import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {Type} from '../type'

@Component({
  selector: 'app-employees-details',
  template: `
  
  <h2>Employees Details</h2>
  <ul *ngFor="let employee of employees">
      <li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li> 
  </ul>
  
  `,
  styleUrls: ['./employees-details.component.css']
})
export class EmployeesDetailsComponent implements OnInit {

  public employees:Type[]=[]

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
         .subscribe(data=>this.employees=data); 
  }

}
