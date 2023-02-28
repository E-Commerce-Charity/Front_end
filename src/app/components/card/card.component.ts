import { Component, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  progress:any = 100;
  rnVal:Number=20;
  maxVal:Number=200;


  @Input() data:any
  @Output() card = new EventEmitter()
  add(){
    this.card.emit(this.data)
    console.log("clicked")
  }


  donateNow(){
    console.log("donateeee")
  }
}
