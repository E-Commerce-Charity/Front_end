import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor() {}
  cartProducts: any[] = [
    { title: 'product1', price: 150, quantity: 5 },
    { title: 'product2', price: 200, quantity: 1 },
    { title: 'product3', price: 100, quantity: 3 },
    { title: 'product4', price: 100, quantity: 3 },
    { title: 'product5', price: 100, quantity: 3 },
    { title: 'product6', price: 100, quantity: 3 },
  ];
  // cartProducts: any[] = []; ////////////
  total: any;
  totalQuantity: number = 0;
  ngOnInit(): void {
    // this.getCartProducts(); /////////////////
    this.getCartTotal();
    this.getTotalQuantity();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
  }

  getCartTotal() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].price * this.cartProducts[x].quantity;
    }
  }
  getTotalQuantity() {
    this.totalQuantity = 0;
    for (let x in this.cartProducts) {
      this.totalQuantity += this.cartProducts[x].quantity;
    }
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getCartTotal();
    this.getTotalQuantity();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minusAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--;
      this.getCartTotal();
      this.getTotalQuantity();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    this.getCartTotal();
    this.getTotalQuantity();
  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotal();
    this.getTotalQuantity();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearCart() {
    this.cartProducts = [];
    this.getCartTotal();
    this.getTotalQuantity();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
