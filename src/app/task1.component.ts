import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {EmployeeService} from './shared/services/employeeInfo.service';
import {Employee} from './shared/modal/Employee';
import {FilterPipe} from './shared/pipe/filter.pipe';
import {FilterPhonenumberPipe} from './shared/pipe/vaildPhoneNumber.pipe';

@Component({
    selector: 'employee-List',
    templateUrl: './task1.component.html',
    styleUrls: ['./app.component.css'],
    providers: [EmployeeService, Http]
})
export class Task1Component implements OnInit {

    errorMessage: string;
    employees = [];

    constructor(private _employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        this.getEmployees();
    }

    getEmployees(): void {
        this._employeeService.getEmployees().subscribe(employees1 => {
            this.employees = employees1;
        });
    }

}
