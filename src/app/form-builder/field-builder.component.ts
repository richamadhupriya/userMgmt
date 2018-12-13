import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-builder',
  templateUrl: './field-builder.component.html'
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any;
  
  constructor() { }

  ngOnInit() {
  }

}
