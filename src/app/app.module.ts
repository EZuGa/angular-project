import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import {HttpClientModule} from '@angular/common/http';
import { ValutisCvlaComponent } from './valutis-cvla/valutis-cvla.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { Day6Module } from './day-6/day-6/day-6.module';
import { LastTaskComponent } from './last-task/last-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RremoveUserComponent } from './rremove-user/rremove-user.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersFormComponent,
    RegisteredUsersComponent,
    ValutisCvlaComponent,
    EmployeeRegisterComponent,
    LastTaskComponent,
    RremoveUserComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Day6Module,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
