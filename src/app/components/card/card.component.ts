import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    private service: CartService,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.getData();
  }
  sold: any;
  inCart: boolean = false;
  progress: any;
  rnVal: any;
  maxVal: any;
  addToCart: String = 'Add To Cart';
  products: any;
  @Input() data: any;
  add() {
    this.inCart = true;
    this.addToCart = 'Successfully added to cart';

    return this.productService
      .getProductById(this.data._id)
      .subscribe((res: any) => {
        this.sold = res.data.sold;
        if (this.sold < res.data.quantity) {
          this.sold++;
          this.service.addToCart(this.data._id).subscribe((res: any) => {
            console.log(res);
          });
        }
      });
  }

  getData() {
    this.maxVal = this.data.quantity;
    this.rnVal = this.data.sold;
    this.progress = (this.rnVal / this.maxVal) * 100;
    console.log('this.progress', this.progress);
  }

  donateNow() {
    console.log('donateeee');
  }
}
