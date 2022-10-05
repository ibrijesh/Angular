import { User } from './user';
import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=["Angular","React","Vue"]

  topicHasError=true;

  userModel=new User('Brijesh',"brjesh@gmal.com",9876543210,'','morninig',true);

  constructor(private _enrollmentService:EnrollmentService) {}


  validateTopic(value:any){
      console.log(value);
      
      this.topicHasError=(value=='default')

      console.log(this.topicHasError);
      
  }


  onSubmit(){
    console.log(this.userModel);
    
    this._enrollmentService.enroll(this.userModel).subscribe(
          data=>console.log('Success',data),
          error=>console.log('Error',error)
        )
  }

}
