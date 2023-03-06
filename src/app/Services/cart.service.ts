import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  auth_token = localStorage.getItem('token');
  // auth_token =
  //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAyMDE2YTRjMzkwNDBmNTAyNzdmMzEiLCJpYXQiOjE2NzgwMTA3NTN9.WFMmVgUsypM7BSeU_tWB7WG_IykphTcdr8l4HX0CLUc';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });
  getCart() {
    console.log(this.auth_token);
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
