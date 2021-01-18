import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUsersService {

  users: FormGroup[] = [];

  constructor() { }

  addUser(user:FormGroup){
    console.log(this.users)
    this.users.push(user)
  }
  getUser(){
    return this.users
  }
  getCurrUser(index:number){
    return this.users[index]
  }
  removeUser(index:number){
      this.users.splice(index,1)
  }
  editUser(user:FormGroup){
    this.users[0] = user;
  }


}
