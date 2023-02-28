import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2U4MjVkZTAwZmVlNGMzZWZkM2I5M2MiLCJpYXQiOjE2Nzc1MzgzNjF9.vqmRJ1rfq5k2cKoWOq5iDLLz65BsJTW7PWk-SrFCmuk';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });
  constructor(private http: HttpClient) {}
  getCart() {
    return this.http.get('http://localhost:3000/cart', {
      headers: this.headers,
    });
  }

  addToCart(productId: any) {
    return this.http.post(
      'http://localhost:3000/cart',
      {
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }
}
