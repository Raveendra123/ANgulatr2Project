"use strict";
////without anjular injector 
//export class computer
//{
Object.defineProperty(exports, "__esModule", { value: true });
//    private processor: Processor;
//    constructor()
//    {
//        this.processor = new Processor();
//    }
//}
//export class Processor 
//{
//   constructor(speed:string){ } ///if you want change here we need to do base clase also we can resolve this issue using anjular injector.
//}
var computer = /** @class */ (function () {
    function computer(Process) {
        this.processor = Process;
    }
    return computer;
}());
exports.computer = computer;
var Processor = /** @class */ (function () {
    function Processor(speed, value) {
    } ///if you want change here we need to do base clase also we can resolve this issue using anjular injector.
    return Processor;
}());
exports.Processor = Processor;
//# sourceMappingURL=Computer.js.map