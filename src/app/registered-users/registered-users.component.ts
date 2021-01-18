import { Component, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {EventEmitter} from '@angular/core';
import { RegisteredUsersService } from '../registered-users.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.scss']
})
export class RegisteredUsersComponent implements OnInit {

  users: FormGroup[] = [];

  @Output() indexToEdit = new EventEmitter();

  constructor(
    private allUsers: RegisteredUsersService
  ) { }

  ngOnInit(): void {
    this.users = this.allUsers.getUser()
    //user.controls.passwordGroup.controls.password.value

  }

  onDelete(index:number){
    console.log(index)
    this.allUsers.removeUser(index)
  }

  onEdit(index:number){
    this.indexToEdit.emit(index.toString());
  }

}
