import { Component } from '@angular/core';
import { PasswordService } from 'src/app/Services/password.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent {
  constructor(private service: PasswordService, private router: Router) {}
  url: any;
  x: any;
  forgetPassword(email: any) {
    this.service.forgetPassword(email).subscribe(
      (res) => {
        this.x = res;
        this.url = this.x.yourUrl;
        console.log(res);
        console.log(this.url);
        localStorage.setItem('url', this.url);
        this.router.navigateByUrl('/login', { replaceUrl: true });
        alert('Check your email');
      },
      (err) => {
        alert(`        Invalid Email
        please enter correct email`);
      }
    );
  }
}
