import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { AuthService } from './../../Services/guardAuth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  data: any;
  numOfCartItems: any;
  logged: any = false;
  nav:any;
  Sticky:any;
  router: any;
  constructor(
    private service: CartService,
    public authService: AuthService,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.getCart();

    this.logged = this.authService.isLoggedIn();
    this.sticky()
  }
  getCart() {
    this.service.getCart().subscribe((res) => {
      this.data = res;
      this.numOfCartItems = this.data.numOfCartItems;
    });
  }

  logout() {
    localStorage.clear();
    this.authService.logout();
    this.logged = false;
    this.route.navigateByUrl('/', { replaceUrl: true });
  }

  sticky(){
    this.nav = document.querySelector('nav');
    // console.log(this.nav);
    this.Sticky = this.nav.offsetHeight;
    // console.log(this.Sticky);
      window.onscroll = ()=> {
        if (window.pageYOffset >= this.Sticky) {
          // console.log("hhhe");
          // console.log(this.nav);
            this.nav.classList.add("sticky");
        } else {
            this.nav.classList.remove("sticky");
        }
      }
  }


}
