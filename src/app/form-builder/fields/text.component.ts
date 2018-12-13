import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html'
})
export class TextComponent implements OnInit{
    @Input() field:any = {};
    @Input() form:FormGroup;
  
    constructor() {

    }
    ngOnInit(){
    }
}