import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2M2U5NGQ0OWIyNDk3MjdhNDcxMTNmZTMiLCJpYXQiOjE2Nzc3OTg5NzB9.nXV59XiPNLngidCjgcPAOQsRrXadhsrV_veLDml6xoI';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });
  getCart() {
    return this.http.get('http://localhost:3000/cart', {
      headers: this.headers,
    });
  }

  addToCart(productId: any) {
    return this.http.post(
      'http://localhost:3000/cart/',
      {
        productId: productId,
      },
      {
        headers: this.headers,
      }
    );
  }
  reduceQuantity(productId: any) {
    return this.http.post(
      'http://localhost:3000/cart/',
      {
        productId: productId,
        minus: true,
      },
      {
        headers: this.headers,
      }
    );
  }

  deleteProduct(productId: any) {
    return this.http.delete(`http://localhost:3000/cart/${productId}`, {
      headers: this.headers,
    });
  }

  clearCart() {
    return this.http.delete('http://localhost:3000/cart/', {
      headers: this.headers,
    });
  }
}
