import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { users } from '../constants/dbUsers'

@Injectable({
  providedIn: 'root'
})





export class Day6Service {

  private users = users;

  private isSigned = false;

  private currentUser = -1;

  constructor() {
    // setInterval(() => {
    //   console.log(this.isSigned)
    // }, 2000);
   }


   changeUserId(id:number){
     this.currentUser = id
   }

   getUserID(){
     return this.currentUser
   }

  addUser(user:InterfaceUser){
    this.users.push(user)
    console.log(this.users)
  }

  signOut(){
    this.isSigned = false;
  }


  getStatus(){
    return this.isSigned;
  }
  getStatusOBS(){
    return of(this.isSigned)
  }



  checkUser(user:InterfaceUser):boolean{
    // let isValid = this.users.some(val=>{

    //   this.currentUser = val.id
    //   return val.email===user.email&&val.password===user.password})

    for(let i=0;i<this.users.length;++i){
      if(users[i].email===user.email&&users[i].password===user.password){
        this.currentUser = users[i].id
        this.isSigned = true;
        return true
      }
    }

    return false
  }

  editUser(changeTo:InterfaceUser){


    this.users.forEach(val=>{
      if(val.id===this.currentUser){
        val.email=changeTo.email;
        val.password=changeTo.password
      }
    })

  }




}


export interface InterfaceUser{
  id:number,
  email:string,
  password:string
}
