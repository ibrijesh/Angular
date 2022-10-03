import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './employees-details/employees-details.component';


/* importing services */
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeesDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
