import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import {RegisteredUsersService} from '../registered-users.service'

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  formGroup!: FormGroup;
  submitDisabled = true;
  isChecked=false;




  constructor(
    public fb:FormBuilder,
    private allUsers: RegisteredUsersService
    ) { }


  ngOnInit(): void {
    this.formGroup = this.fb.group({
      "email":["",[Validators.required, Validators.email]],
      "nickName":["",[Validators.required, Validators.pattern("^[A-Za-z0-9-]+$")]],
      "phoneNumber":["",[Validators.required,Validators.pattern(`^(\\+380)[0-9]{9}$`)]],
      "website":["",[Validators.required, Validators.pattern("^(https?)?(www\\.)[a-zA-Z]+\\.[a-zA-Z]+$")]],
      "checkbox":[false,Validators.requiredTrue],
      
      "passwordGroup":this.fb.group({
        "password":["",[Validators.required,Validators.minLength(7),Validators.pattern("^[A-Za-z0-9]+$")]],
        "confirmPassword":["",[Validators.required]],

      },{validators:this.passwordMath}),
    })
  }

  onSubmit(){
    console.log(this.formGroup.status)
    if(this.formGroup.status === "VALID"){
      console.log(this.formGroup)
      this.allUsers.addUser(this.formGroup)
      
    }
    
  }
  onPass(){
this.enableButton()
  }
  onCheckbox(){
    this.isChecked = !this.isChecked
    this.enableButton()
  }

  enableButton(){
    // let checkbox = this.formGroup.controls.checkbox.value
    let passwordStatus = this.formGroup.controls.passwordGroup.status
  
    if(passwordStatus ==="VALID" && this.isChecked){
      this.submitDisabled = false
    }else{
      this.submitDisabled = true
    }
  }

  

  passwordMath(formGroup:FormGroup):ValidationErrors|null{
    const pass = formGroup.get("password")?.value;
    const confirmPass = formGroup.get("confirmPassword")?.value;
    

    if(pass!==confirmPass){
      return {"confirmed":true}
    }else{
      return null;
    }
  }


}
