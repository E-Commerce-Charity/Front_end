import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.getData();
  }
  progress: any;
  rnVal: any;
  maxVal: any;

  @Input() data: any;
  @Output() card = new EventEmitter();
  add() {
    this.service.addToCart(this.data._id).subscribe((res: any) => {
      console.log('Product id', this.data._id);
      console.log('res', res);
    });
    // this.service.sold(this.data._id).subscribe((res:any)=>{
    //   console.log(res);
    // })
  }
  getData() {
    this.card.emit(this.data);
    console.log('data', this.data);
    this.maxVal = this.data.quantity;
    this.rnVal = this.data.sold;
    this.progress = this.rnVal / this.maxVal;
  }

  donateNow() {
    console.log('donateeee');
  }
}

/*
 addCart(event: any) {

    this.service.addToCart(this.productId).subscribe((res: any) => {
      console.log(res);
    });
*/
