import { Injectable, EventEmitter } from '@angular/core';
import {User} from '../user';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userClicked = new EventEmitter<User>();
  user:any;
  userdata:any;
  constructor(private http:HttpClient) { }

  isUserLoggedIn = false;
  public username;

  setUserLoggedIn(user: string) {
    this.isUserLoggedIn = true;
    this.username = user;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  



}
