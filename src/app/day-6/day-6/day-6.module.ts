import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '../login-page/login-page.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LoginPageComponent,
    MainPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [AuthGuard]
})
export class Day6Module { }
