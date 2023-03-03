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
  router: any;
  constructor(
    private service: CartService,
    public authService: AuthService,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.getCart();
    // this.logged = localStorage.getItem('isLogged');

    this.logged = this.authService.isLoggedIn();
    console.log(this.logged);
  }
  getCart() {
    this.service.getCart().subscribe((res) => {
      console.log('from nav bar', res);
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
}
