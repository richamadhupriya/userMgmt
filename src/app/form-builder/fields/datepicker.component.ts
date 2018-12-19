import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-date',
    template: `<div [formGroup]="form" class="container" [ngClass]="{'has-axis-required':form.get(field.name).invalid}">
    <input type={{field.type}} class="axis-form-control"  id={{field.name}} name={{field.name}} formControlName={{field.name}} placeholder={{field.placeholder}}>  
  </div>
  <div *ngIf="form.get(field.name).hasError('required')" class="axis-required-indicator">Please select a date</div>
  `
})
export class DatepickerComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;

    constructor() {

    }

}