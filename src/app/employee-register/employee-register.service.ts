import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeRegisterService {

  constructor(private http:HttpClient) { }


  getData():Observable<User[]> {
      return this.http.get<User[]>("http://localhost:3000/posts")
  }

  getUser(id:number):Observable<User>{
    console.log("GET")
    return this.http.get<User>(`http://localhost:3000/posts/${id}`)
  }

  registerUser(user:User):Observable<boolean>{
    console.log("AEE")
    return this.http.post<boolean>("http://localhost:3000/posts",user)
  }

  updateUser(id:number,user:User):Observable<boolean>{
    return this.http.put<boolean>(`http://localhost:3000/posts/${id}`,user)
  }
  deleteUser(id:number):Observable<Object>{
    return this.http.delete<Object>(`http://localhost:3000/posts/${id}`)
  }

}




export interface User{
  id:number,
  employee_name:string,
  employee_salary:string,
  employee_age:string,
}
