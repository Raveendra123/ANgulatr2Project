import { Component } from '@angular/core';
import {UserPrefaranceService} from '../Employee/UserPrefaranceService';


@Component({

    template: `<h1>Home Page display</h1>
<div>Colour Preferance:
<input type='text' [(ngModel)]='colour' [style.background]='colour'/></div>`,
   // providers: [ UserPrefaranceService]

})

export class HomeComponent {

    //private _userPrefaranceService: UserPrefaranceService;// anjular dependency purpose commented.
    constructor(private _userPrefaranceService: UserPrefaranceService)
    {
        //this._userPrefaranceService= new UserPrefaranceService(); //commented for anjular dependency checking
    }

    get colour(): string {

        return this._userPrefaranceService.colorpreference;


    }
    set colour(value:string)
    {
        this._userPrefaranceService.colorpreference = value;
    }
   
}



