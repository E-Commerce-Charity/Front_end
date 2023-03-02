import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor(private service: CartService) {}
  progress: any = 100;
  rnVal: Number = 20;
  maxVal: Number = 200;

  @Input() data: any;
  @Output() card = new EventEmitter();
  add() {
    this.card.emit(this.data);
    this.service.addToCart(this.data._id).subscribe((res: any) => {
      console.log(res);
    });
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
