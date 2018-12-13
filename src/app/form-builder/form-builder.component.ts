import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  @Input() fields: any[] = [];
  form: FormGroup;
  fieldData:any = [];
  constructor() { }

  ngOnInit() {
    let formControls = {};
    for (let field of this.fields) {
      formControls[field.name] = new FormControl('', Validators.required);
    }
    this.form = new FormGroup(formControls);

    for(var i in this.fields)
    {
      this.fieldData.push(i,this.fields[i]);
    }
    
  }

}
