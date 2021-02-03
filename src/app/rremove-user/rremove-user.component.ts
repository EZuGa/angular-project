import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-remove-user',
  templateUrl: './rremove-user.component.html',
  styleUrls: ['./rremove-user.component.scss'],
  // animations:[
  //   trigger("showPage",[
  //     state("begin",style({
  //       opacity:"0"
  //     })),
  //     state("void",style({
  //       opacity:"0"
  //     })),
  //     state("end",style({
  //       opacity:"0.9"
  //     })),
  //     transition(":enter",[
  //       animate("1s")
  //     ]),
  //     transition(":leave",[
  //       animate("1s",style({
  //         opacity:0,
  //       }))
  //     ])
  //   ])
  // ]
})
export class RremoveUserComponent implements OnInit {

  constructor() { }

  shouldRemoveUser = false;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {
  }

  onButton(){
    this.notify.emit()
  }

}
