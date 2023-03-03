import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2U5NGQ0OWIyNDk3MjdhNDcxMTNmZTMiLCJpYXQiOjE2Nzc3OTg5NzB9.nXV59XiPNLngidCjgcPAOQsRrXadhsrV_veLDml6xoI';
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
}
