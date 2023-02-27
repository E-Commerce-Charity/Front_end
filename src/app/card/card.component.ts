import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  progress:any = 100;
  rnVal:Number=20;
  maxVal:Number=200;
}
