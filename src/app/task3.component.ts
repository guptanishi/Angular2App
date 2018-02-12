import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {EmployeeService} from './shared/services/employeeInfo.service';
import {Employee} from './shared/modal/Employee';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl , ReactiveFormsModule} from '@angular/forms';
import {Form} from '@angular/forms/src/directives/form_interface';

@Component({
    selector: 'Add-Employees',
    templateUrl: './task3.component.html',
    styleUrls: ['./app.component.css'],
    providers: [EmployeeService, Http]
})
export class Task3Component implements OnInit {
    // public user: User;
    form: FormGroup;
    employee: Employee = new Employee();
    employees = [];
    title: string;
    articleIdToUpdate : null;
    statusCode: number;
    constructor(private _fb: FormBuilder,private _employeeService: EmployeeService, private route: ActivatedRoute, private _router: Router) {
        console.log('Form Component Start');
    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl('', [Validators.required , Validators.minLength(5)]),
            phone: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
            address: new FormGroup({
                city : new FormControl(),
                address_line1 : new FormControl(),
                address_line2 : new FormControl(),
                postal_code : new FormControl()
             })
          
        });

        
        const id = this.route.params.subscribe(params => {
            const id = params['id'];
            this.title = id ? 'Edit User' : 'New User';
            
            if (!id)
                return;
            else{
                this.articleIdToUpdate = id;
                this._employeeService.getEmployee(id)
                    .subscribe(employee =>                  
                        {
                        console.log("Hi");
                        console.log(employee['address']['city']);
                         this.form.setValue({ 
                            name: employee['name'],
                            phone: employee['phone'],
                            address: {
                                city: employee['address']['city'],
                                address_line1: employee['address']['address_line1'],
                                address_line2: employee['address']['address_line2'],
                                postal_code: employee['address']['postal_code']
                            }

                         });
                    },
                    errorCode =>  this.statusCode = errorCode);
                }
        });
    }

    submitted = false; // form not submited : default
    data: string; // this variable contains our data

    initAddress() {
        // initialize our address
        return this._fb.group({
            city : new FormControl(),
            address_line1 : new FormControl(),
            address_line2 : new FormControl(),
            postal_code : new FormControl()
        });
    }

    // Show data after form submit
    save(data) {
        let result,
            userValue = {id: data.value.id, name: data.value.name,
                phone: data.value.phone,
                address: {
                    city: data.value.address.city,
                    address_line1: data.value.address.address_line1,
                    address_line2: data.value.address.address_line2,
                    postal_code: data.value.address.postal_code
                }
            };
        const editEmployeeId = this.route.params.subscribe(params => {
        const editEmployeeId = params['id'];

        if(this.form.valid) {
           this.submitted = true;
                if (editEmployeeId) {
                    result = this.updateEmployee(userValue , editEmployeeId);
                } else {
                    result = this.addEmployee(userValue);
                }
          }
        });
    }



    addEmployee(employee: Employee): void {

        this._employeeService.addEmployee(employee).subscribe(employee1 => {
            this._employeeService.getEmployees();
            this._router.navigate(['/Employees']);
        });
    }

    updateEmployee(employee: Employee , editEmployeeId : number): void {

        this._employeeService.updateEmployee(employee , editEmployeeId).subscribe(employee1 => {
            this._employeeService.getEmployees();
            this._router.navigate(['/Employees']);
        });
    }


}