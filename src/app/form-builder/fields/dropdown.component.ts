import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html'
})
export class DropDownComponent{
    @Input() field:any = {};
    @Input() form:FormGroup;

    constructor() {

    }

}