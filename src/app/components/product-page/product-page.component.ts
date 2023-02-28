import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  title:string= "Product" ;

  cards: card[] = [
    { id: 1, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 2, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 3, title: 'donating', desc: 'lorem ipsm', addToCart: true },
    { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  ];

  cartProducts: any[] = [];
  addToCart: boolean = true;

  addCart(event: any) {
    console.log(event);
    if ('card' in localStorage) {
      this.cartProducts.push(event);
    }
    localStorage.setItem('card', JSON.stringify(event));
  }
}

interface card {
  id: number;
  title: string;
  desc: string;
  addToCart: boolean;
}
