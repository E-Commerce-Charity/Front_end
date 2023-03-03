import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  id: any;
  users: any;
  user: any;
  userId: any;
  name: any;
  email: any;
  phone: any;
  password: any;
  orders: any;
  ordersPhoto: any;
  dataOrder: any;

  constructor(route: ActivatedRoute, private myService: userService) {
    // this.id = route.snapshot.params['id'];
    // this.id = '63ff3bd58146188ca3df5253';
  }
  ngOnInit(): void {
    this.myService.getUserById('63e94d49b249727a47113fe3').subscribe({
      next: (res) => {
        this.user = res;
        this.userId = this.user.data.user;
        this.name = this.userId.name;
        this.email = this.userId.email;
        this.phone = this.userId.phone;
        this.password = this.userId.password;
        console.log(this.user);
        console.log(this.user.data.user.name);
      },
      error: (err) => {
        console.log(err);
      },
    });
    // this.myService.getAllUsers().subscribe({
    //   next: (res) => {
    //     this.users = res;
    //     // this.name = this.user.name;
    //     // this.email = this.user.email;
    //     // this.phone = this.user.phone;
    //     console.log(this.users);
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });
    this.myService.GetOrder().subscribe({
      next: (res) => {
        this.orders = res;
        this.dataOrder = this.orders.data;
        this.ordersPhoto = this.orders.data[1].cartItems[1].product.imageCover;
        console.log(this.orders.data[1].cartItems[1].product.imageCover);
        console.log(this.orders.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  update() {
    // console.log(this.name);

    let data1 = {
      name: this.name,
      phone: this.phone,
      email: this.email,
      password: this.password,
    };
    this.myService.updateUser(data1, '63e94d49b249727a47113fe3').subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
