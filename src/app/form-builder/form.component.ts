import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `<div class="row" style="margin-bottom:50px;">
  <div class="col-lg- 6 col-md-1 col-sm-6">
      <app-form-builder [fields]="getFields()" (submit)="submit($event)"></app-form-builder>
  </div>

  <div class="col-lg-6 col-md-11 col-sm-6"></div>
</div>`
})
export class FormComponent implements OnInit {
  
  form: FormGroup;
  public fields: any = [];
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.fields = this.formService.getFormStructure();


    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    });
  }

  getFields() {
    return this.fields;
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}
