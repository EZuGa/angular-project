import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValutaService {

  valutIn = "USD"
  url  = `https://api.exchangeratesapi.io/latest?base=${this.valutIn}`

  constructor(private http:HttpClient) { 

    // this.valutIn = "EUR"
    // this.url = `https://api.exchangeratesapi.io/latest?base=${this.valutIn}`
    setTimeout(()=>{this.getValutaData()},1000)

  }


  // getValutaData():Observable<valutisOBJ>{
  //   console.log("aee")
  //   return this.http.get<valutisOBJ>(this.url)
  // }
  getValutaData():any{
    console.log("aee")
    return this.http.get<any>(this.url)
  }
}




export interface valutisOBJ{
  rates:{
    [gio:string]:number,
  },
  base:string,
  date:string,
}
