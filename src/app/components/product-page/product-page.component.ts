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
  category: any;
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

  onSelected(value: any) {
    console.log(value);
    this.category = value;
    if (this.category !== 'null') {
      return this.productService
        .getProductByCategory(this.totalNumber, this.category)
        .subscribe((res: any) => {
          this.cards = res.data;
        });
    } else {
      return this.productService
        .getAllProducts(this.totalNumber)
        .subscribe((res: any) => {
          this.cards = res.data;
        });
    }
  }
}

interface card {
  id: number;
  title: string;
  desc: string;
  addToCart: boolean;
}
