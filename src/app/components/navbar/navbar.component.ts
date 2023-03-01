import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  data: any;
  numOfCartItems: any;
  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.getCart();
  }
  getCart() {
    this.service.getCart().subscribe((res) => {
      console.log('from nav bar', res);
      this.data = res;
      this.numOfCartItems = this.data.numOfCartItems;
    });
  }
}
