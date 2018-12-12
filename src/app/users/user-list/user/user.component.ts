import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../../user.service';
import {User} from '../../../user'
import { HttpClient } from '@angular/common/http';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData:any;
  id:string;
  name:string;
  email:string;
  mobile:string;
  location:string;

  selectedUser:User;
  @Input() userIndex:number;

  @Input() user:User;
  constructor(private userService:UserService, private http:HttpClient,private caller:UserDataService) { }

  ngOnInit() {
    
    this.selectedUser = this.user;
    //console.log(this.userSelected)
  }

  getUser(){
    this.userService.userClicked.emit(this.selectedUser);
  }

  update(selectedUser,userIndex)
  {
    console.log(selectedUser.id);
    console.log(userIndex);
  }
}