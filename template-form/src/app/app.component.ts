import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=["Angular","React","Vue"]

  topicHasError=true;

  userModel=new User('Brijesh',"brjesh@gmal.com",9876543210,'','morninig',true);


  validateTopic(value:any){
      console.log(value);
      
      this.topicHasError=(value=='default')

      console.log(this.topicHasError);
      
  }

}
