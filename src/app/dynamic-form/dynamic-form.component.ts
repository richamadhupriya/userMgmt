import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
    //    
    public uiData1 = [];
    public uiStructure1: any;
    public refresh1 = {};
    public formData1: any;

    ngOnInit() {
        this.uiStructure1 = this.getUIStructure1();
    }

    ngOnDestroy() {
        if (this.formData1) {
           // this.uiData1 = {};
            this.formData1.form.model.reset();
        }
    }

    submitForm(event) {
        if (event.form.model.valid) {
            console.log(event.form.value);
          
        }
        else {
            console.log("Invalid form")
        }

    }
    updateForm(event) {
        if (event && event.form && event.form.model) {
            this.formData1 = event;
        }
        if (event && event.hasOwnProperty('form')) {
            console.log('Confirm Updated', event);
        }
    }

    getUIStructure1(): Object {
        return {

            "sections": {
                "myMainForm": {
                    "type": "form",
                    "data": {
                        "showSubmit": true,
                        "submitText": 'Submit',

                        "fields": [
                            {
                                "type": "text",
                                "name": "userId",
                                "label": "ID",
                                "required": "true",
                                "size": "b",
                                "axisSettings": {
                                    "reg_exp": "^\\d{1,10}$"
                                },
                                "inputClear": true,
                                "autocomplete": "off",
                                "placeholder": "Enter your id(numeric characters only)",
                                "errorMessage": "Please fill out this field"
                            },
                            {
                                "type": "text",
                                "name": "password",
                                "label": "Password",
                                "required": "true",
                                "minLength": "6",
                                "size": "b",
                                "axisSettings": {
                                    "reg_exp": "[a-zA-Z]"
                                },
                                "inputClear": true,
                                "maxlength": "6",
                                "placeholder": "Enter your password",
                                "errorMessage": "Please fill out this field",
                                "displayIf": [
                                    { "userId": "length>0" }
                                  ]
                            },
                            {
                                "type": "toggle",
                                "name": "joiningStatus",
                                "label": "Are you a fresher",
                                "title": "Click here if you are a fresher",
                                "isReset": true,
                                "options": [
                                    "Yes",
                                    "No"
                                ],
                                "size": "b",
                                "required": true,
                                "displayIf": [
                                    { "password": "length>0" }
                                  ]
                            },

                            {
                                "type": "formGroup",
                                "name": "mainGroup",
                                "sizeChildren": "b",
                                "displayIf": [
                                    {
                                      "joiningStatus": "value===Yes"
                                    }
                                 ],
                                 "fields": [
                                    {
                                        "type": "radio",
                                        "name": "gender",
                                        "label": "Gender:",
                                        "size": "b",
                                        "inputClear": true,
                                        "required": true,
                                        "options": [
                                            {
                                                "value": "Male",
                                                "label": "Male",
                                                "checked": false
                                            },
                                            {
                                                "value": "Female",
                                                "label": "Female",
                                                "checked": false
                                            }
                                        ]
                                    },
                                    {
                                        "type": "datepicker",
                                        "name": "dateOfJoining",
                                        "size": "b",
                                        "label": "Date of Joining",
                                        "requireIf": [
                                            { "accept": "value===Yes" }
                                        ]
                                    },
                                    {
                                        "type": "formGroup",
                                        "name": "experience",
                                        "fields": [
                                            {
                                                "type": "slider",
                                                "name": "slider",
                                                "label": "Experience",
                                                "hideToolTipLabel": false,
                                                "hideMarkDividerValues": true,
                                                "size": "b",
                                                "config": {
                                                    "step": 1,
                                                    "range": {
                                                        "min": 0,
                                                        "max": 10
                                                    },
                                                    "start": 0,
                                                    "connect": [true, false],
                                                    "tooltips": true,
                                                    "pips": {
                                                        "mode": "steps",
                                                        "stepped": true,
                                                        "density": 2
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                 ]
                            }
                        ]
                    }
                }
            }
        };
    }



}
