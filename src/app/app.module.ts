import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import {HttpClientModule} from '@angular/common/http';
import { ValutisCvlaComponent } from './valutis-cvla/valutis-cvla.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component'


@NgModule({
  declarations: [
    AppComponent,
    UsersFormComponent,
    RegisteredUsersComponent,
    ValutisCvlaComponent,
    EmployeeRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
