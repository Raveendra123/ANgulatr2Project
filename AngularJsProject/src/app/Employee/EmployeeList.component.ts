import { Component,OnInit } from '@angular/core';
import { Iemployee } from './Employee';
import { EmployeeService } from './EmployeeService';
import { UserPrefaranceService } from '../Employee/UserPrefaranceService';

@Component({
    selector: 'EmployeeList',
    templateUrl: 'app/Employee/EmployeeListDetails.html',
    styleUrls: ['app/Employee/EmployeeDetailStylesheet.css'],
   // providers: [UserPrefaranceService],

})
export class EmployeeListcomponent implements OnInit {
   // employees: any[];
    employees: Iemployee[];
    SelectedRadionButtonChange: string = 'All';
    Statusmessage: string = 'Loading the data..';
   
    constructor(private _EmployeeService: EmployeeService, private _userPrefaranceService: UserPrefaranceService)
    {
        //this.employees = _EmployeeService.GetEmployess();
        //this._userPrefaranceService = new UserPrefaranceService(); for depedency injector purpose we have commented.
    }
    //ngOnInit(){
    //    this.employees = this._EmployeeService.GetEmployess();   
    //}
    get colour(): string {

        return this._userPrefaranceService.colorpreference;


    }
    set colour(value: string) {
        this._userPrefaranceService.colorpreference = value;
    }
    ngOnInit() {
        this._EmployeeService.GetEmployess().subscribe(employeeData => this.employees = employeeData, (error) => { this.Statusmessage = 'Problem with service .please try after some time'; console.error(error);}
        );
        

    }
    //constructor() {
    //    this.employees = [];
        //    [{ code: 'emp101', name: 'raju', gender: 'Male', AnnualSalary: 50000, dateofbirth: '06/12/1990' },
        //{ code: 'emp102', name: 'ramu', gender: 'Male', AnnualSalary: 25000, dateofbirth: '07/23/1995' },
        //{ code: 'emp103', name: 'Ruthu', gender: 'Female', AnnualSalary: 45000, dateofbirth: '06/14/1987' },
        //{ code: 'emp104', name: 'Kavya', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' },
        //{ code: 'emp105', name: 'Teju', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' },
        //{ code: 'emp106', name: 'Ramani', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' }
        //]

    OnSelectedRedioButtonCount(SelectedChange: string): void {
        this.SelectedRadionButtonChange = SelectedChange;
    }
    getTotalEmployeecount(): number
    {
        return this.employees.length;
    }
    getTotalMaleEmployeecount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeecount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
    showdetails(): void {
        this.employees = [{ code: 'emp101', name: 'raju', gender: 'Male', AnnualSalary: 50000, dateofbirth: '06/12/1990' },
        { code: 'emp102', name: 'ramu', gender: 'Male', AnnualSalary: 25000, dateofbirth: '07/23/1995' },
        { code: 'emp103', name: 'rajini', gender: 'Female', AnnualSalary: 45000, dateofbirth: '06/14/1987' },
        { code: 'emp104', name: 'Kavya', gender: 'Female', AnnualSalary: 15000, dateofbirth: '12/06/1988' },
        { code: 'emp105', name: 'Sai', gender: 'Male', AnnualSalary: 5000, dateofbirth: '07/12/2014'}
        ];



    }
    TrackbyEmpCode(index: number, employee: any): string {
        return employee.code;
    }
}

