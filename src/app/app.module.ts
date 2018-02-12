import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule }     from './app.routing.module';
import { AppComponent } from './app.component';
import {EmployeeService} from './shared/services/employeeInfo.service';
import { Task1Component } from './task1.component';
import { Task3Component } from './task3.component';
import { FilterPipe} from './shared/pipe/filter.pipe';
import { FilterPhonenumberPipe} from './shared/pipe/vaildPhoneNumber.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task3Component,
    FilterPipe,
    FilterPhonenumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
