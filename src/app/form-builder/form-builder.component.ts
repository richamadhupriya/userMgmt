import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  @Input() fields: any[] = [];
  form: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  fieldData:any = [];
  constructor() { }
  


  ngOnInit() {
    let formControls = {};
    for (let field of this.fields) {
      formControls[field.name] = new FormControl('',Validators.required);
    }
    this.form = new FormGroup(formControls);

    for(var i in this.fields)
    {
      this.fieldData.push(i,this.fields[i]);
    }
    
  }

  onSubmit(form){
   
    this.submit.emit(form.value);
  //  event.preventDefault();
  //  event.stopPropagation();
  //  this.form.reset();
  console.log(form.valid)
  }

}
