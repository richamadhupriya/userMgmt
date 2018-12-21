import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import {FormComponent} from './form-builder/form.component';
import { AxisUiGeneratorModule } from 'axis-ui-generator/axis-ui-generator.module'; 


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
    LoginComponent,
    DynamicFormComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AxisComponentsAllModule,
    FormBuilderModule,
    FormsModule,
    BrowserAnimationsModule,
    AxisUiGeneratorModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
