import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-button',
    template: `
    <div [formGroup]="form" class="container">
        <input type="submit" axis-button class="axis-form-control" data-kind="primary"  id={{field.name}} value={{field.btnText}} />
    </div>
    `
})
export class ButtonComponent {
    @Input() field: any = {};
    @Input() form: FormGroup;
}