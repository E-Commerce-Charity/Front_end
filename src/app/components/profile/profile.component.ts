import { ProfileService } from './../../Services/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  users: any;

  id: any;
  user: any;
  name: any;
  phone: any;
  email: any;
  password:any;

  constructor(private myService: ProfileService, route: ActivatedRoute) {
    // this.id = route.snapshot.params['id'];
    this.id='1';
  }

  ngOnInit(): void {

    this.myService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        console.log(this.users);
      }
   });

   this.myService.getUserById(this.id).subscribe({
    next: (res) => {
      this.user = res;
      this.name = this.user.name;
      this.phone = this.user.phone;
      this.email = this.user.email;
      console.log(this.user);
    }
   });

  }

 update(){
    let data= {
      name: this.name,
      phone: this.phone,
      email: this.email,
    };
    this.myService.UpdateUserById(data,this.id).subscribe();
  }

}
