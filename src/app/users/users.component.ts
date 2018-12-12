import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser:User
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userClicked.subscribe(
      (user:User)=>
      {
        this.selectedUser = user;
      }
    )
  }

}
