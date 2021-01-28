import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Day6Service } from './day-6/day-6/day-6.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-project';


  constructor(public loggedIn:Day6Service){}
  ngOnInit(): void {




  }

}
