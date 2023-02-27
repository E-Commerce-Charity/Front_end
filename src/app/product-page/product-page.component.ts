import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  cards: card[] = [
    { id: 1, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 2, title: 'donating', desc: 'lorem ipsm', addToCart: false },
    { id: 3, title: 'donating', desc: 'lorem ipsm', addToCart: true },
    { id: 4, title: 'donating', desc: 'lorem ipsm', addToCart: false },
  ];
  addToCart:boolean=true;
}

interface card {
  id: number;
  title: string;
  desc: string;
  addToCart: boolean;
}
