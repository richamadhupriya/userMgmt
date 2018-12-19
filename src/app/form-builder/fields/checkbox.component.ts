
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkbox',
    templateUrl:'./checkbox.component.html'
})
export class CheckBoxComponent implements OnInit{
    @Input() field:any = {};
    @Input() form:FormGroup;
    selectedOption = [];
    ngOnInit(){
    }
    
   getValue(event)
   {
       let selected = event.target;
       if(selected.checked == true){
        this.selectedOption.push(selected.value);
        console.log(this.selectedOption)
       }
       
   }

}