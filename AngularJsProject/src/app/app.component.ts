import { Component } from '@angular/core';
//import {EmployeeListcomponent } from './Employee/EmployeeList.component';
@Component({
    selector: 'my-app',
    template: `<div style="pedding:5px"><ul class= "nav nav-tabs">
<li><a routerLinkActive="true" routerLink='home'>Home</a></li>
<li><a routerLinkActive="true" routerLink="employees">Employees</a></li></ul>
<router-outlet></router-outlet></div>`
//`<div>Your entered text is : <input type='text' [(ngModel)]='userText'/>
//<br/>
//<br/>
//<sample [SimpleInput]='userText'></sample>
        
//<img [src]='imagepath'/>
// <Employee></Employee><br/><br/>
//<EmployeeList></EmployeeList>
//<button disabled='{{isdisabled}}'>Click here</button>
//<span bind-innerHtml='pageheader'></span>
//<div [innerHtml]='badhtml'></div>
//<table>{{badhtml}}</table>
//<input id='inputid' type='text' value='Tom'>
//<button class='colorClass' class={{ApplyToAllClass}}>My Button interpolation</button>
//<br/><br/>
//<button class='colorClass italicksClass boldClass' [class.boldClass]='Applyboldclass'>My Button propertbinding</button>
//<br/>
//<br/>
//<br/>
//<button class='colorClass' [ngClass]='addClasses()'>My Button ngClass</button>
//<br/>
//<br/>
//<button style='color:red' [style.font-size.px]='fontsize'> My Button inline style</button>
//<br/>
//<br/>
//<button style='color:red' [ngStyle]="AddStyles()"> My Button inline Ngstyle</button>
//<br/>
//<br/>

//<button (click)="onClick()"> Clickme eventbinding</button>
// Name : <input [(ngModel)]='name'/>
 //<br/>
//You Entered:{{name}}
//</div>`,
    // templateUrl:'app/HtmlPage.html',  
})
export class AppComponent  {
    pageheader: string = 'Employee details';
    // firstname: string = 'Raveendra';
    // lastname: string = 'Babu';
    imagepath: string = 'http://www.pragimtech.com/Images/Logo.JPG';
    isdisabled: boolean = true;
    badhtml: string = 'Hello <script>alert(Hacked)</script>';
    ApplyToAllClass: string = 'boldClass italicksClass';
    Applyboldclass: boolean = false;
    ApplyItalicClass: boolean = false;
    isBold: boolean = true;
    fontsize: number = 30;
    italic: boolean = true;
    name: string = 'Tom';   
    userText: string = 'Pragim';

    addClasses()
    {
    let classes = {
        boldClass: this.Applyboldclass,
        italicksClass: this.ApplyItalicClass
    };
    return classes;
    }
    AddStyles() {

        let Style = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.italic ? 'italic' : 'normal',
            'font-size.px': this.fontsize
        };
        return Style;
    }

    onClick(): void {

        console.log("Clicked");
    }

   
}

    // getfullname(): string {
    // return this.firstname + '  ' + this.lastname;


