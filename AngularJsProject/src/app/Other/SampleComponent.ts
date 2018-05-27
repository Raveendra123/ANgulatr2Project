import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component(
    {
        selector:'sample',
        template: `Value is :{{SimpleInput}}`

})
export class SampleComponents implements OnChanges {
    @Input() SimpleInput: string;
    ngOnChanges(Changes:SimpleChanges)
    {
        for (let PropertyName in Changes)
        {
            let change = Changes[PropertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log("propertyname:" + PropertyName + "CurrentValue" + current + "Previous Value" + previous);
        }
    }
    

}