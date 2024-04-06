import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Stock } from '../interfaces/stock.interface';
import { Order } from '../interfaces/order.interface';
import { Transfer } from '../interfaces/transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class ToroApiService {
  public apiUrl = 'https://ich5p4r08l.execute-api.sa-east-1.amazonaws.com';
  constructor(private http: HttpClient) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.apiUrl}/trends`)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

  buyStock(payload: Order): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/orders`, payload)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }

  transfer(payload: Transfer): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/spb/events`, payload)
      .pipe(
        catchError(error => {
          throw error;
        })
      );
  }
}
