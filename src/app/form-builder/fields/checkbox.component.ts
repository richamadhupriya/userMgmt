
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkbox',
    templateUrl:'./checkbox.component.html'
})
export class CheckBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
}