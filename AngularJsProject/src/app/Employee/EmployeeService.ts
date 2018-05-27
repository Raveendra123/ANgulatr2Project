import { Component, Injectable } from '@angular/core';
import { Iemployee } from './Employee';
import {Http,Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class EmployeeService
{
    constructor(private _http: Http)
    {

    }
    GetEmployess():Observable <Iemployee[]>
    {

        return this._http.get("http://localhost:15598/api/employees/")
            .map((response: Response) => <Iemployee[]>response.json())
            .catch(this.handleError);               
    }

    GetEmployeBycode(EmpCode : string): Observable<Iemployee[]> {

        return this._http.get("http://localhost:15598/api/employees/"+EmpCode)
            .map((response: Response) => <Iemployee[]>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response)
    {
        console.error(error);
        return Observable.throw(error);

    }

    //GetEmployess(): Iemployee[]
    //{
    //    //return [{ code: 'emp101', name: 'raju', gender: 'Male', AnnualSalary: 50000, dateofbirth: '06/12/1990' },
        //{ code: 'emp102', name: 'ramu', gender: 'Male', AnnualSalary: 25000, dateofbirth: '07/23/1995' },
        //{ code: 'emp103', name: 'Ruthu', gender: 'Female', AnnualSalary: 45000, dateofbirth: '06/14/1987' },
        //{ code: 'emp104', name: 'Kavya', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' },
        //{ code: 'emp105', name: 'Teju', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' },
        //{ code: 'emp106', name: 'Ramani', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' }
        //];
    //}

}