import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ValutaService } from '../valuta.service';
import {map,tap} from 'rxjs/operators'

@Component({
  selector: 'app-valutis-cvla',
  templateUrl: './valutis-cvla.component.html',
  styleUrls: ['./valutis-cvla.component.scss']
})
export class ValutisCvlaComponent implements OnInit {

  // constructor(private fetchValuta:ValutaService) { }

  // ngOnInit(): void {
  //   this.fetchValuta.getValutaData()
  //   .subscribe(
  //     (data:any)=>{
  //     console.log("SHEMOVIDA")
  //     console.log(data)
  //   } );

  // }

  constructor(private http:HttpClient,   private fb:FormBuilder,){}
    fromCountry = "USD"
    toCountry = "EUR"
    form!:FormGroup
    rates: any[] =[]
    rate?: number;
    currArr:string[] = 
    ["CAD", "HKD", "ISK", "PHP", "DKK", "HUF",
     "CZK", "GBP", "RON", "SEK", "IDR", "INR", 
     "BRL", "RUB", "HRK", "JPY", "THB", "CHF",
      "EUR", "MYR", "BGN", "TRY", "CNY", "NOK",
       "NZD", "ZAR", "USD", "MXN", "SGD", "AUD",
        "ILS", "KRW", "PLN"]
    editingSecond = false;
    editingFirst = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      "valutIn":[""],
      "valutOut":[""],
      "selectIn":["USD"],
      "selectOut":["EUR"],
    })
    this.getHTTP()

    
  }


  onSelectIn(){
    this.fromCountry = this.form.get("selectIn")?.value
    this.getHTTP()
  }
  onSelectOut(){
    let country = this.form.get("selectOut")?.value;
    this.toCountry = country;
     this.rate = this.rates[country]
     this.calculateMoney()
  }

  onInputIn(input:number){
    if(this.editingSecond){
      return;
    }
    this.editingFirst = true;
    this.calculateMoney()
    this.editingFirst = false;
  }
  onInputOut(input:number){
    if(this.editingFirst){
      return;
    }
    this.editingSecond = true
    console.log("AEE")
    this.form.get("valutIn")?.patchValue(1000)
    this.editingSecond = false
  }

  calculateMoney(){
    this.form.get('valutOut')!.patchValue((this.valutIn*this.rate!).toFixed(2))
  }


  getHTTP(){
      
    this.http.get<any>(`https://api.exchangeratesapi.io/latest?base=${this.fromCountry}`)
    .pipe(
      tap(value=>{this.rate = value.rates[this.selectOut];this.rates=value.rates}),
      tap(()=>this.calculateMoney())
    )
    .subscribe()
  }


  get valutIn(){
    return this.form.get("valutIn")?.value
  }
  get valutOut(){
    return this.form.get("valutOut")?.value
  }
  get selectIn(){
    return this.form.get("selectIn")?.value
  }
  get selectOut(){
    return this.form.get("selectOut")?.value
  }
  

}
