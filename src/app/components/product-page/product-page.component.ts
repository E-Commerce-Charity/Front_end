import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CartService } from '../../Services/cart.service';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  title: string = 'Product';
  productId: any = '63e9fd14a34792b62f0b3b7e';
  constructor(
    private service: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  cards: any = [];
  // cards: card[] = [
  //   { id: 1, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  //   { id: 2, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  //   { id: 3, title: 'donating', desc: 'lorem ipsm', addToCart: true },
  //   { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  //   { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  //   { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  //   { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  //   { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  // ];

  cartProducts: any[] = [];
  addToCart: boolean = true;

  addCart(event: any) {
    this.service.addToCart(this.productId).subscribe((res: any) => {
      console.log(res);
    });

    // console.log(event);
    // if ('card' in localStorage) {
    //   this.cartProducts.push(event);
    // }
    // localStorage.setItem('card', JSON.stringify(event));
  }

  getProducts() {
    return this.productService.getProduct().subscribe((res: any) => {
      console.log(res);
      this.cards = res.data;
      console.log(this.cards.data);
    });
  }
}

interface card {
  id: number;
  title: string;
  desc: string;
  addToCart: boolean;
}
