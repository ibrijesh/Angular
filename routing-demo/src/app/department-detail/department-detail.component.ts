import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap,Params,Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `

    <h2> You have selected department with id={{departmentId}}</h2>
    <a (click)="onPrevious()">Previous </a>
    <a (click)="onNext()">Next</a>

    <div>
      <button (click)="gotToDepartments()">Back</button>
    </div>

  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId:any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    // This does not update id becouse angular do not call the ngOnInit constructor
    // const id=this.route.snapshot.paramMap.get('id');
    // this.departmentId=id;

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.departmentId=id;
    })
  }


  onPrevious(){

    let previousId=parseInt(this.departmentId)-1;
    this.router.navigate(['/departments',previousId]);
  }


  onNext(){
     let nextId=parseInt(this.departmentId)+1 
     this.router.navigate(['/departments',nextId]);
  }


  gotToDepartments(){
    let selectedId=parseInt(this.departmentId)?parseInt(this.departmentId):null;
     this.router.navigate(['/departments',{id:selectedId}]);
  }

}