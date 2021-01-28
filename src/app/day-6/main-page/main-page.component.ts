import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Day6Service } from '../day-6/day-6.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  formGroup!:FormGroup
  editMode=false;


  constructor(private authService:Day6Service,private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      "email":["",[Validators.required,Validators.email]],
      "password":["",[Validators.required]]
    })
  }
  logout(){
    this.authService.signOut()
    this.route.navigate(["login"])
  }


  onSubmit(){
    if(this.formGroup.invalid){
      return alert("NOT VALID")
    }


    console.log(this.authService.getUserID())
    this.authService.editUser(this.formGroup.getRawValue())
    this.formGroup.reset()
    this.editMode = false
  }
  onEdit(){
    this.editMode= true;
  }
}
