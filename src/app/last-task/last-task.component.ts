import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../employee-register/employee-register.service';

@Component({
  selector: 'app-last-task',
  templateUrl: './last-task.component.html',
  styleUrls: ['./last-task.component.scss'],
  animations:[
    trigger("httoAnim",[
      state("begin",style({
        width: "0px"
      })),
      state("void",style({
        width: "0px"
      })),
      state("end",style({
        width: "100%"
      })),
      transition("begin => end",[
        animate("2s")
      ])
    ]),

      trigger("showPage",[
        state("begin",style({
          opacity:"0"
        })),
        state("void",style({
          opacity:"0"
        })),
        state("end",style({
          opacity:"0.9"
        })),
        transition(":enter",[
          animate("1s")
        ]),
        transition(":leave",[
          animate("1s",style({
            opacity:0,
          }))
        ])
      ])

  ],

})
export class LastTaskComponent implements OnInit {

  vnaxee = false
  state : "end" | "begin" = "begin"

  removeWindow = false

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }


  getDATA(){
    this.onAnim()
    this.vnaxee = true
    this.http.get<User[]>("http://localhost:3000/posts")
    .pipe(
      tap(val=>{console.log(val)})
    )
    .subscribe(
      ()=>{},
      ()=>{},
      ()=>{this.vnaxee = false},
    )
  }


  onAnim(){

    this.state = this.state === "end" ? "begin" : "end"
  }
  onAnimationEnd(yes:any){
    if(yes.fromState==="begin"){
      console.log("Ae")
      this.state = "begin"
      setTimeout(() => {
        this.state = "end"
      }, 0);
    }

  }

  onRemove(){
    console.log("aee")
    this.removeWindow = true
  }

  onNotify() {
    this.removeWindow = false;
  }


}
