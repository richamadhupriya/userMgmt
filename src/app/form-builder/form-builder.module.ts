import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AxisComponentsAllModule } from 'axis-components/components/components.module';

// components
import { FormBuilderComponent } from './form-builder.component';
import { FieldBuilderComponent } from './field-builder.component';
import { TextComponent } from './fields/text.component';
import { RadioComponent } from './fields/radio.component';
import { CheckBoxComponent } from './fields/checkbox.component';
import { DropDownComponent } from './fields/dropdown.component';
import { DatepickerComponent } from './fields/datepicker.component';
import { ButtonComponent } from './fields/button.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AxisComponentsAllModule
  ],
  declarations: [
    FormBuilderComponent,
    FieldBuilderComponent,
    TextComponent,
    RadioComponent,
    CheckBoxComponent,
    DropDownComponent,
    DatepickerComponent,
    ButtonComponent
  ],
  entryComponents:[  
    TextComponent,
    RadioComponent,
    CheckBoxComponent,
    DropDownComponent,
    DatepickerComponent,
    ButtonComponent],
  exports: [FormBuilderComponent],
  providers: []
})
export class FormBuilderModule { }
