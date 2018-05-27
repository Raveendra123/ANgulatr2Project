"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Employee_Component_1 = require("./Employee/Employee.Component");
var EmployeeList_component_1 = require("./Employee/EmployeeList.component");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var EmployeeCustomPipe_1 = require("./Employee/EmployeeCustomPipe");
var EmployeeCountComponent_1 = require("./Employee/EmployeeCountComponent");
var SampleComponent_1 = require("./Other/SampleComponent");
var http_1 = require("@angular/http");
var HomeComponent_1 = require("./Home/HomeComponent");
var PagenotFoundComponent_1 = require("./Other/PagenotFoundComponent");
var router_1 = require("@angular/router");
var Testmodule_1 = require("./Testmodule");
var appRoutes = [
    { path: 'home', component: HomeComponent_1.HomeComponent },
    { path: 'employees', component: EmployeeList_component_1.EmployeeListcomponent },
    { path: 'employees/:code', component: Employee_Component_1.EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PagenotFoundComponent_1.PagenotfoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, Testmodule_1.Testmodule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
            declarations: [app_component_1.AppComponent, Employee_Component_1.EmployeeComponent, EmployeeList_component_1.EmployeeListcomponent, EmployeeCustomPipe_1.EmployeeTitlePipe, EmployeeCountComponent_1.EmployeeCountDetails, SampleComponent_1.SampleComponents, HomeComponent_1.HomeComponent, PagenotFoundComponent_1.PagenotfoundComponent],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map