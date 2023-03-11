import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements  OnInit  {

  num:any;
  header:any;
  Maxarr: any;
  arr: any;
  mybutton:any;

  constructor(private router: Router,private renderer: Renderer2) {
}
  ngOnInit(): void {
    this.counter();
  }
  add() {
    this.router.navigateByUrl('/signup');
  }
  counter(){
   this.num = document.querySelectorAll(".statistics_num");
    this.arr = this.num;
   this.arr= Array.from(this.arr);
   this.Maxarr = this.arr.map((item:any)=>{
     return +item.innerHTML
   });

   this.arr.map((item:any)=>{
    item.innerHTML = 0;
    return item.innerHTML
  });

 
  this.header = document.getElementById('header');
  console.log(this.header);
  console.log(this.header.offsetHeight);
  console.log(window.pageYOffset);
   console.log(this.arr);


   let check:any=false;
   window.addEventListener('scroll',()=>{
    if(!check){
    console.log("hi");
    let timer:any;
    if (window.pageYOffset >= this.header.offsetHeight -550) {
      console.log("hi");
      this.arr.map((item:any,index:any)=>{
        for(let i=1; i<=this.Maxarr[index];i++){
          timer = setTimeout(() => {
            item.innerHTML = i;
          }, 100*i);
        }
        return item.innerHTML
      });
      check=true;

    } else{
      console.log(window.pageYOffset);
      clearTimeout(timer)
    }
  }
    

});
  
}

}
