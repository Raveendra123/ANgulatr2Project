"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService_1 = require("./EmployeeService");
var UserPrefaranceService_1 = require("../Employee/UserPrefaranceService");
var EmployeeListcomponent = /** @class */ (function () {
    function EmployeeListcomponent(_EmployeeService, _userPrefaranceService) {
        this._EmployeeService = _EmployeeService;
        this._userPrefaranceService = _userPrefaranceService;
        this.SelectedRadionButtonChange = 'All';
        this.Statusmessage = 'Loading the data..';
        //this.employees = _EmployeeService.GetEmployess();
        //this._userPrefaranceService = new UserPrefaranceService(); for depedency injector purpose we have commented.
    }
    Object.defineProperty(EmployeeListcomponent.prototype, "colour", {
        //ngOnInit(){
        //    this.employees = this._EmployeeService.GetEmployess();   
        //}
        get: function () {
            return this._userPrefaranceService.colorpreference;
        },
        set: function (value) {
            this._userPrefaranceService.colorpreference = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListcomponent.prototype.ngOnInit = function () {
        var _this = this;
        this._EmployeeService.GetEmployess().subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) { _this.Statusmessage = 'Problem with service .please try after some time'; console.error(error); });
    };
    //constructor() {
    //    this.employees = [];
    //    [{ code: 'emp101', name: 'raju', gender: 'Male', AnnualSalary: 50000, dateofbirth: '06/12/1990' },
    //{ code: 'emp102', name: 'ramu', gender: 'Male', AnnualSalary: 25000, dateofbirth: '07/23/1995' },
    //{ code: 'emp103', name: 'Ruthu', gender: 'Female', AnnualSalary: 45000, dateofbirth: '06/14/1987' },
    //{ code: 'emp104', name: 'Kavya', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' },
    //{ code: 'emp105', name: 'Teju', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' },
    //{ code: 'emp106', name: 'Ramani', gender: 'Female', AnnualSalary: 5000, dateofbirth: '12/06/1988' }
    //]
    EmployeeListcomponent.prototype.OnSelectedRedioButtonCount = function (SelectedChange) {
        this.SelectedRadionButtonChange = SelectedChange;
    };
    EmployeeListcomponent.prototype.getTotalEmployeecount = function () {
        return this.employees.length;
    };
    EmployeeListcomponent.prototype.getTotalMaleEmployeecount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListcomponent.prototype.getTotalFemaleEmployeecount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListcomponent.prototype.showdetails = function () {
        this.employees = [{ code: 'emp101', name: 'raju', gender: 'Male', AnnualSalary: 50000, dateofbirth: '06/12/1990' },
            { code: 'emp102', name: 'ramu', gender: 'Male', AnnualSalary: 25000, dateofbirth: '07/23/1995' },
            { code: 'emp103', name: 'rajini', gender: 'Female', AnnualSalary: 45000, dateofbirth: '06/14/1987' },
            { code: 'emp104', name: 'Kavya', gender: 'Female', AnnualSalary: 15000, dateofbirth: '12/06/1988' },
            { code: 'emp105', name: 'Sai', gender: 'Male', AnnualSalary: 5000, dateofbirth: '07/12/2014' }
        ];
    };
    EmployeeListcomponent.prototype.TrackbyEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListcomponent = __decorate([
        core_1.Component({
            selector: 'EmployeeList',
            templateUrl: 'app/Employee/EmployeeListDetails.html',
            styleUrls: ['app/Employee/EmployeeDetailStylesheet.css'],
        }),
        __metadata("design:paramtypes", [EmployeeService_1.EmployeeService, UserPrefaranceService_1.UserPrefaranceService])
    ], EmployeeListcomponent);
    return EmployeeListcomponent;
}());
exports.EmployeeListcomponent = EmployeeListcomponent;
//# sourceMappingURL=EmployeeList.component.js.map