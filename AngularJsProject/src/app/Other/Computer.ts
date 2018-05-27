
////without anjular injector 
//export class computer
//{

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



export class computer {
    private processor: Processor;
    constructor(Process:Processor) ///injected the anjular injector
    {
        this.processor = Process;
    }
    }




export class Processor {
    constructor(speed: string,value:string) { } ///if you want change here we need to do base clase also we can resolve this issue using anjular injector.

}