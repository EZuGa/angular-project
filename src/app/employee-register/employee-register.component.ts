import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EmployeeRegisterService, User } from './employee-register.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {


  form!: FormGroup;

  userArr:User[] = []
  displayUsers:User[]=[]
  page=0;
  ourUser?:User
  editMode = false
  editID=0

  constructor(private customHttp:EmployeeRegisterService, private fb:FormBuilder) { }




  ngOnInit(): void {
    this.form = this.fb.group({
      employee_name:[""],
      employee_salary:[""],
      employee_age:[""]
    })

    this.HTTPREQUEST()

  }




  HTTPREQUEST(){
    this.customHttp.getData()
    .pipe(
      tap(val=>console.log(val)),
      tap(val=>this.userArr=val),
      tap(val=>{
        if(this.page===0){
        this.displayUsers=val.slice(0,5)}
      })
    )
    .subscribe()
  }


  // HTTPupdate(){
  //   this.customHttp.getUser(10).pipe(
  //     tap(val=>console.log(val))
  //   )
  //   .subscribe()
  // }


  createUser(){
    let user = this.form.getRawValue() as User

    this.customHttp.registerUser(user)
    .pipe(
      tap(val=>console.log(val))
    ).subscribe()

    this.HTTPREQUEST()
  }
  AEE(){
    console.log("Aeeee")
  }


  next(){
    if(this.page+1 >= this.userArr.length/5){
      return alert("Last Page")
    }

    this.page++
    console.log(this.page + " A " + this.userArr.length/5)

    const start = this.page*5
    const end = start+5
    this.displayUsers = this.userArr.slice(start,end)

  }

  pervious(){
    if(this.page === 0){
      return alert("First Page")
    }


    this.page--
    const start = this.page*5
    const end = start+5

    this.displayUsers = this.userArr.slice(start,end)

  }

  currentUser(index:number){


    this.customHttp.getUser(index)
    .pipe(tap(val=>this.ourUser = val))
    .subscribe()
  }

  onEdit(index:number){
    this.editMode = true
    let user = this.displayUsers.filter(curr=>curr.id===index)
    this.editID = index

    this.form.patchValue(user[0])

  }

  cancleEdit(){
    console.log("cancle")
    this.editMode = false
    this.editID = 0
    this.form.reset()
  }

  saveEdit(){
    console.log("save")
    let user = this.form.getRawValue()
    this.customHttp.updateUser(this.editID,user)
    .pipe(
      tap(val=>console.log(val))
    )
    .subscribe()
    this.HTTPREQUEST()
    this.currentUser(this.editID)
    this.cancleEdit()

  }

  onDelete(index:number){
    console.log("DETETE()")
    this.customHttp.deleteUser(index)
    .pipe(tap(val=>console.log(val)))
    .subscribe()
    this.HTTPREQUEST()
    this.ourUser = undefined
  }
}
