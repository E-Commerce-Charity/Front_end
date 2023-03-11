import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charity';
  loaderElem:any;
load:any;
  mybutton:any;
  constructor(private router: Router,private renderer: Renderer2) {
}

  ngOnInit(): void {
    this.scrollFunction();
    this.loader()

  }

 scrollFunction() {
  this.mybutton = document.getElementById("btn-back-to-top");
  window.addEventListener('scroll',()=>{

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
       this.mybutton.style.display = "block";
    } else {
        this.mybutton.style.display = "none";
    }
    // When the user clicks on the button, scroll to the top of the document
this.mybutton.addEventListener("click", this.backToTop);
  });

}

 backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


loader(){

  window.addEventListener('load', ()=> {
   document.body.style.overflow = 'hidden';
   this.loaderElem = document.querySelector(".loader img")
   setTimeout(() => {
     document.body.style.overflow =  'auto';
     document.body.style.overflowX =  'hidden';
 
     this.loaderElem.parentNode.remove();
   }, 1500);
      
   
   });
 }
}
