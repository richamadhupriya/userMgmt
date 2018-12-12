import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  addUser: FormGroup;
  name: string;
  id: string;
  email: string;
  mobile: string;
  location: string;
  constructor(private caller: UserDataService) { }

  ngOnInit() {
    this.addUser = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]+')])),
      id: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9@. ]+')])),
      mobile: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[0-9]+')])),
      location: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[A-Za-z ]+')]))
    });
  }

  add() {
    let name = this.addUser.controls['name'].value;
    let id = this.addUser.controls['id'].value;
    let email = this.addUser.controls['email'].value;
    let mobile = this.addUser.controls['mobile'].value;
    let location = this.addUser.controls['location'].value;
    console.log(name);
    this.caller.postData(name,id,email,mobile,location).subscribe((data: any) => { });
    this.addUser.reset();
  }
}
