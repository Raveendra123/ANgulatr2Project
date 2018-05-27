import { Component ,Input,Output,EventEmitter} from '@angular/core';
@Component({

    selector: 'EmployeCount',
    templateUrl: 'app/Employee/EmployeeCountdetails.html',
    styleUrls:['app/employee/Employeecount.css'],

})
export class EmployeeCountDetails {
    SelectedRadioButtonValue:string = 'All'; 
    @Output()
    CountRadiobuttonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
    @Input() All: number;
    @Input() male: number;
    @Input() female: number;
    
  onRadiobuttonSelectionchange()
  {
  this.CountRadiobuttonSelectionChanged.emit(this.SelectedRadioButtonValue);
   console.log(this.SelectedRadioButtonValue);
  }


}