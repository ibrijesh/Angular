import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=["Angular","React","Vue"]

  userModel=new User('Brijesh',"brjesh@gmal.com",987654321,'','morninig',true);

}
