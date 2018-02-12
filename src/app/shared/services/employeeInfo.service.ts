import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Employee} from '../modal/Employee';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class EmployeeService {
    _baseUrl = 'http://localhost:3000/data';

    constructor(private http: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this._baseUrl);
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this._baseUrl, employee, httpOptions)
            .map(() => employee).do(data => console.log('createProduct: ' + JSON.stringify(data)));
    }

    getEmployee(id: number) {
        return this.http.get(this._baseUrl + '/' + id);
    }

    updateEmployee(employee: Employee , editEmployeeId: number): Observable<Employee>  {
        return this.http.put<Employee>(this._baseUrl + '/' +editEmployeeId, employee, httpOptions);
    }

}
