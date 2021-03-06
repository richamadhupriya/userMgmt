import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'user';
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
