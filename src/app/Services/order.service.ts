import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  auth_token = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });

  constructor(private http: HttpClient) {}

  createOrder(cartId: any) {
    return this.http.post(
      `http://localhost:3000/oreders/${cartId}`,
      { paymentMethodType: 'meals' },
      { headers: this.headers }
    );
  }
  createCashOrder(cartId: any) {
    return this.http.post(
      `http://localhost:3000/oreders/${cartId}`,
      { paymentMethodType: 'cash' },
      { headers: this.headers }
    );
  }
}
