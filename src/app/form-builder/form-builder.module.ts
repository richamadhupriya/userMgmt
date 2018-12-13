import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import {FormBuilderComponent} from './form-builder.component';
import {FieldBuilderComponent} from './field-builder.component';
import {TextComponent} from './fields/text.component';
import { RadioComponent } from './fields/radio.component';
import { CheckBoxComponent } from './fields/checkbox.component';
import {DropDownComponent} from './fields/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FormBuilderComponent,
    FieldBuilderComponent,
    TextComponent,
    RadioComponent,
    CheckBoxComponent,
    DropDownComponent
  ],
  exports: [FormBuilderComponent],
  providers: []
})
export class FormBuilderModule { }
