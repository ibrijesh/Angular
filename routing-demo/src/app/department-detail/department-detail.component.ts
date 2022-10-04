import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `

    <h2> You have selected department with id={{departmentId}}</h2>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    this.departmentId=id;
  }

}
