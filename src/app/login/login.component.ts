import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../users/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFrm: FormGroup;
  userName: string;
  password: string;
  captcha:any;
  siteKey: '6LeGa28UAAAAAGQNIRAWWR0BDyHGLrFWsqUNjiic';
  errorMessage: string;
  USER = { 'password': '123' };

  constructor(private router: Router, private userService:UserService) { }

  ngOnInit() {
    this.loginFrm = new FormGroup({
      userId: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9@. ]+')])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9 ]+')])),
      captcha:new FormControl('')
    });
  }

  login() {
    let user = this.loginFrm.controls['userId'].value;
    let pass = this.loginFrm.controls['password'].value;
    if (pass == this.USER.password) {
      this.userService.setUserLoggedIn(user);
      this.router.navigate(['user']);
    }
    else {
      this.errorMessage = "INCORRECT USER ID / PASSWORD";
      alert(this.errorMessage);
      this.loginFrm.reset();
    }
  }

  registerFrm(){
    this.router.navigate(['register']);
  }
}
