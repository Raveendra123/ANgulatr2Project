import { NgModule } from '@angular/core';
import { UserPrefaranceService } from './Employee/UserPrefaranceService';
import {EmployeeService} from './Employee/EmployeeService'

@NgModule({
    providers: [UserPrefaranceService,EmployeeService]
})

export class Testmodule
{
    constructor()
    {

    }

}
