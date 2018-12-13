import { Injectable } from '@angular/core';
var formStructure = require('../assets/form.json');
@Injectable()

export class FormService
{
    getFormStructure(){
       return formStructure
    }

}