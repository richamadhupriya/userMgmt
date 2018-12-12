import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFrm: FormGroup;
  userName: string;
  password: string;
  fName: string;
  lName: string;
  constructor(private router:Router) { }

  ngOnInit() {
    this.registerFrm = new FormGroup({
      userId: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9@. ]+')])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9 ]+')])),
      fName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]+')])),
      lName: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]+')]))
    });
  }

  register(){
    this.router.navigate(['login']);
  }

  cancelRegistration(){
    this.router.navigate(['login']);
  }


}
