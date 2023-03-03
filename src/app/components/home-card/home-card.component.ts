import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from '../../Services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homeCard',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  add() {
    this.router.navigateByUrl('/signup');
  }
}
