import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AxisComponentsAllModule } from 'axis-components/components/components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import {UserComponent} from './users/user-list/user/user.component';
import { LoginComponent } from './login/login.component';
import { FormService } from './form.service';
import {FormBuilderModule} from './form-builder/form-builder.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    UsersComponent,
    UserListComponent,
    EditUserComponent,
    UserDetailComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AxisComponentsAllModule,
    FormBuilderModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
