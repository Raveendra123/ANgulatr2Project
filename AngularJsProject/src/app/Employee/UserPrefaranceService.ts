import { Injectable } from '@angular/core';
@Injectable()

export class UserPrefaranceService 
{
    constructor()
    {
        console.log('New Instance of service created');
    }
    colorpreference: string = 'Orange';
}