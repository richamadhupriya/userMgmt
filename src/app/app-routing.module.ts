import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./register/register.component";;
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { TodoComponent } from './todo/todo/todo.component';

const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'user',
    component:UsersComponent,
    children:[
      {
        path: 'newUser',
        component:EditUserComponent
      },
      {
        path:':id',
        component: UserDetailComponent
      }
      
    ]
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
