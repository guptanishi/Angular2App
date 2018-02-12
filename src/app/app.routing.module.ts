import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Task1Component } from './task1.component';
import { Task3Component } from './task3.component';
import { EmployeeService } from './shared/services/employeeInfo.service';

const routes: Routes = [
  { path: '', redirectTo: '/Employees', pathMatch: 'full' },
  { path: 'Employees', component: Task1Component },
  { path: 'add', redirectTo: '/Employees/add', pathMatch: 'full' },
  { path: 'Employees/add', component: Task3Component },
  { path: 'Employee/edit/:id', component: Task3Component}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
