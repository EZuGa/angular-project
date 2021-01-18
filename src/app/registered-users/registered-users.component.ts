import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    alert("This action will remove a user with this email: " + this.users[index].get("email")?.value)
    let userAgreed = confirm("Are you sure?")
    if(userAgreed === false){
      return
    }

    console.log(index)
    this.allUsers.removeUser(index)
  }

  onEdit(index:number){
    this.indexToEdit.emit(index.toString());
  }

}
