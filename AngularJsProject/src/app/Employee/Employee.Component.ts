import { Component, OnInit } from '@angular/core';
import {Iemployee} from './employee';
import { EmployeeService } from './EmployeeService';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
    selector:'employee',
    templateUrl: 'app/Employee/EmployeeDetails.html',
    styleUrls: ['app/Employee/EmployeeDetailStylesheet.css'],
 
})
export class EmployeeComponent implements OnInit {
    employee: Iemployee[];
    statusMessage: string = 'Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,private _router:Router) { }

    OnBackButtonClick(): void
    {
        this._router.navigate(['/employees']);

    }
    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.GetEmployeBycode(empCode)
            .subscribe((employeeData) => {
                if (employeeData == null) {
                    this.statusMessage =
                        'Employee with the specified Employee Code does not exist';
                }
                else {
                    this.employee = employeeData;
                }
            },
                (error) => {
                    this.statusMessage =
                        'Problem with the service. Please try again after sometime';
                    console.error(error);
                });
    }
}