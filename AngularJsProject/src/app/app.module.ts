import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeComponent } from './Employee/Employee.Component';
import {EmployeeListcomponent } from './Employee/EmployeeList.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeTitlePipe } from './Employee/EmployeeCustomPipe';
import { EmployeeCountDetails } from './Employee/EmployeeCountComponent';
import { SampleComponents } from './Other/SampleComponent';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './Home/HomeComponent';
import { PagenotfoundComponent } from './Other/PagenotFoundComponent';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeService } from './Employee/EmployeeService';
import { UserPrefaranceService } from './Employee/UserPrefaranceService';
import { Testmodule } from  './Testmodule';
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListcomponent },
    {path:'employees/:code',component:EmployeeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: '**',component:PagenotfoundComponent}
];
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,Testmodule, RouterModule.forRoot(appRoutes, { useHash: true})],
    declarations: [AppComponent, EmployeeComponent, EmployeeListcomponent, EmployeeTitlePipe, EmployeeCountDetails,SampleComponents,HomeComponent,PagenotfoundComponent],
    bootstrap: [AppComponent],
    //providers: [EmployeeService]
})
export class AppModule { }
