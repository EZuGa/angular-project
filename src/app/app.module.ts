import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import {HttpClientModule} from '@angular/common/http';
import { ValutisCvlaComponent } from './valutis-cvla/valutis-cvla.component'


@NgModule({
  declarations: [
    AppComponent,
    UsersFormComponent,
    RegisteredUsersComponent,
    ValutisCvlaComponent,
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
