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
  removeUser(index:number){
      this.users.splice(index,1)
  }


}
