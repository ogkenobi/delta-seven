import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  ethPrice$!: Observable<any>;

  constructor(
    private http: HttpClient
  ) { 
    this.ethPrice$ = this.getEthPrice();
  }

    getEthPrice(): Observable<any> {
    return this.http.get('https://api.coingecko.com/api/v3/simple/price?ids=Ethereum&vs_currencies=usd').pipe(
      map((res: any) => {
        console.log(res)
        return res.ethereum.usd
      })
    );
    }


  // getHistoricEthPrice(day: string, month: string, year: string): Observable<any> {
  //   return this.http.get('https://api.coingecko.com/api/v3/coins/ethereum/history', {params: {
  //     localization: false,
  //     date: `${day}-${month}-${year}`
  //   }});
  // }

  


  ngOnInit(): void {

  }

}
