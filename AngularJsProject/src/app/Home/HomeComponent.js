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
var UserPrefaranceService_1 = require("../Employee/UserPrefaranceService");
var HomeComponent = /** @class */ (function () {
    //private _userPrefaranceService: UserPrefaranceService;// anjular dependency purpose commented.
    function HomeComponent(_userPrefaranceService) {
        this._userPrefaranceService = _userPrefaranceService;
        //this._userPrefaranceService= new UserPrefaranceService(); //commented for anjular dependency checking
    }
    Object.defineProperty(HomeComponent.prototype, "colour", {
        get: function () {
            return this._userPrefaranceService.colorpreference;
        },
        set: function (value) {
            this._userPrefaranceService.colorpreference = value;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        core_1.Component({
            template: "<h1>Home Page display</h1>\n<div>Colour Preferance:\n<input type='text' [(ngModel)]='colour' [style.background]='colour'/></div>",
        }),
        __metadata("design:paramtypes", [UserPrefaranceService_1.UserPrefaranceService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=HomeComponent.js.map