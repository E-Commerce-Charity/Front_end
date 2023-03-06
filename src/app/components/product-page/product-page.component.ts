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
  cards: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 15;
  tableSizes: any = [3, 6, 9, 12, 15, 18];
  data: any;
  title: string = 'Product';
  numberOfPages: any;
  noOfPages: Number[] = [];

  constructor(
    private service: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  cartProducts: any[] = [];
  addToCart: boolean = true;
  productsNo: any;
  limit: any;
  totalNumber: any;
  SoldCard: any;
  category: any = 'null';
  myPrice: any = 'null';
  // getPage(index: Number) {
  //   return this.productService.getPage(index).subscribe((res: any) => {
  //     this.cards = res.data;
  //   });
  // }

  getAllProducts() {
    return this.productService
      .getAllProducts(this.totalNumber)
      .subscribe((res: any) => {
        this.cards = res.data;
      });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getAllProducts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllProducts();
  }

  // onSelected(value: any) {
  //   console.log(value);
  //   this.category = value;
  //   if (this.category !== null && this.myPrice !== null) {
  //     console.log('both');
  //     return this.productService
  //       .getProductByCategoryAndPrice(
  //         this.totalNumber,
  //         this.category,
  //         this.myPrice
  //       )
  //       .subscribe((res: any) => {
  //         this.cards = res.data;
  //       });
  //   } else if (this.category !== 'null' && this.myPrice == null) {
  //     console.log('By category');
  //     return this.productService
  //       .getProductByCategory(this.totalNumber, this.category)
  //       .subscribe((res) => {
  //         console.log(res);
  //       });
  //   } else {
  //     console.log('All');
  //     return this.productService
  //       .getAllProducts(this.totalNumber)
  //       .subscribe((res: any) => {
  //         this.cards = res.data;
  //       });
  //   }
  // }

  onSelected(value: any) {
    console.log(value);
    this.category = value;
    console.log('category: ', this.category);
    console.log('price: ', this.myPrice);
    if (this.category == 'null' && this.myPrice == 'null') {
      console.log('All');
      return this.productService
        .getAllProducts(this.totalNumber)
        .subscribe((res: any) => {
          this.cards = res.data;
        });
    } else if (this.category == 'null' && this.myPrice !== 'null') {
      console.log('By Price');
      return this.productService
        .getProductByPrice(this.totalNumber, this.myPrice)
        .subscribe((res) => {
          console.log(res);
          this.data = res;
          this.cards = this.data.data;
        });
    } else if (this.category !== 'null' && this.myPrice !== 'null') {
      console.log('By category and Price');
      return this.productService
        .getProductByCategoryAndPrice(
          this.totalNumber,
          this.category,
          this.myPrice
        )
        .subscribe((res) => {
          console.log(res);
          this.data = res;
          this.cards = this.data.data;
        });
    } else if (this.myPrice === 'null') {
      console.log('by category');
      return this.productService
        .getProductByCategory(this.totalNumber, this.category)
        .subscribe((res: any) => {
          this.cards = res.data;
        });
    } else {
      return;
    }
  }

  priceChange(price: any) {
    this.myPrice = price;
    console.log(this.myPrice);
    console.log(this.category);
    if (this.category == 'null') {
      console.log('cat null');
      return this.productService
        .getProductByPrice(this.totalNumber, this.myPrice)
        .subscribe((res: any) => {
          this.cards = res.data;
        });
    } else {
      return this.productService
        .getProductByCategoryAndPrice(
          this.totalNumber,
          this.category,
          this.myPrice
        )
        .subscribe((res: any) => {
          this.cards = res.data;
        });
    }
  }
}
