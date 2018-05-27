"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import {EmployeeListcomponent } from './Employee/EmployeeList.component';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageheader = 'Employee details';
        // firstname: string = 'Raveendra';
        // lastname: string = 'Babu';
        this.imagepath = 'http://www.pragimtech.com/Images/Logo.JPG';
        this.isdisabled = true;
        this.badhtml = 'Hello <script>alert(Hacked)</script>';
        this.ApplyToAllClass = 'boldClass italicksClass';
        this.Applyboldclass = false;
        this.ApplyItalicClass = false;
        this.isBold = true;
        this.fontsize = 30;
        this.italic = true;
        this.name = 'Tom';
        this.userText = 'Pragim';
    }
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.Applyboldclass,
            italicksClass: this.ApplyItalicClass
        };
        return classes;
    };
    AppComponent.prototype.AddStyles = function () {
        var Style = {
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.italic ? 'italic' : 'normal',
            'font-size.px': this.fontsize
        };
        return Style;
    };
    AppComponent.prototype.onClick = function () {
        console.log("Clicked");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div style=\"pedding:5px\"><ul class= \"nav nav-tabs\">\n<li><a routerLinkActive=\"true\" routerLink='home'>Home</a></li>\n<li><a routerLinkActive=\"true\" routerLink=\"employees\">Employees</a></li></ul>\n<router-outlet></router-outlet></div>"
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
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// getfullname(): string {
// return this.firstname + '  ' + this.lastname;
//# sourceMappingURL=app.component.js.map