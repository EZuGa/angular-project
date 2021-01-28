import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Day6Service } from './day-6.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService:Day6Service,
              private router:Router){}



  canActivate():boolean{

    console.log("AUTH GUARD")
    if(this.authService.getStatus()){
      return true
    }else{
      this.router.navigate(["login"])
      return false
    }
  }


}
