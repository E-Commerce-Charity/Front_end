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
  numberOfPages: any;
  noOfPages: Number[] = [];

  // productId: any = '63e9ef19bb8ac8b5d36bce33';
  constructor(
    private service: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    // this.loop();
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
  // loop() {
  //   for (let i = 0; i < this.numberOfPages; i++) {
  //     this.noOfPages?.push(1);
  //   }
  //   console.log('loop', this.noOfPages);
  // }

  cartProducts: any[] = [];
  addToCart: boolean = true;
  productsNo: any;
  limit: any;
  totalNumber: any;
  // totalProduct=this.productsNo*
  // addCart(event: any) {
  // this.service.addToCart(this.productId).subscribe((res: any) => {
  // console.log(res);
  // });

  // console.log(event);
  // if ('card' in localStorage) {
  //   this.cartProducts.push(event);
  // }
  // localStorage.setItem('card', JSON.stringify(event));
  // }
  getPage(index: Number) {
    return this.productService.getPage(index).subscribe((res: any) => {
      console.log('index', index);
      console.log('all', res);
      this.cards = res.data;
      console.log('this.cards', this.cards);

      console.log('loop', this.noOfPages);
    });
  }
  getProducts() {
    return this.productService.getProduct().subscribe((res: any) => {
      // console.log('all', res);
      this.productsNo = res.pagenationResult.numberOfPages;
      this.limit = res.pagenationResult.limit;
      this.totalNumber = this.limit * this.productsNo;
      this.numberOfPages = Math.ceil(res.pagenationResult.numberOfPages);
      console.log(this.numberOfPages);
      this.cards = res.data;
      // console.log('this.cards', this.cards);
      console.log('totalNumber', this.totalNumber);
      for (let i = 1; i < this.numberOfPages + 1; i++) {
        this.noOfPages?.push(i);
      }
      // console.log('loop', this.noOfPages);
    });
  }

  getAllProducts() {
    return this.productService
      .getAllProducts(this.totalNumber)
      .subscribe((res: any) => {
        console.log('index', this.productsNo);
        console.log('all', res);
        this.cards = res.data;
        console.log('this.cards', this.cards);

        console.log('loop', this.noOfPages);
      });
  }
}

interface card {
  id: number;
  title: string;
  desc: string;
  addToCart: boolean;
}
