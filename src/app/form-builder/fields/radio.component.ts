import { Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-radio',
    templateUrl:'./radio.component.html'
})
export class RadioComponent implements OnInit {
    @Input() field:any = {};
    @Input() form:FormGroup;
    public selectedOption:any;
    res:any;
    @Output() value: EventEmitter<any> = new EventEmitter<any>();


    onClickRadio(event){
        this.selectedOption = event.target;
        if(this.selectedOption.checked){
           this.value.emit(this.selectedOption.value)
            console.log(this.selectedOption.value)
           // this.res = this.selectedOption.value
        }


    }
    ngOnInit()
    {
    }
}