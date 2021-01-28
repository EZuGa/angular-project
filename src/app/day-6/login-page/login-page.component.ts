import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Day6Service } from '../day-6/day-6.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formGroup!:FormGroup


  constructor(private fb:FormBuilder,private router:Router,private authService:Day6Service) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      "email":["",[Validators.required,Validators.email]],
      "password":["",[Validators.required]]
    })
  }

  onSubmit(){
    if(this.formGroup.invalid){
      alert("FORM NOT VALID")
      return
    }

    let isValid = this.authService.checkUser(this.formGroup.getRawValue())


    if(isValid){
      this.router.navigate(["mtavari"])
      
    }
    else{
      alert("TRY AGAIN!")
    }
}
}
