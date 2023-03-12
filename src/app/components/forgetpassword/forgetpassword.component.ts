import { Component, OnInit } from '@angular/core';
import { PasswordService } from 'src/app/Services/password.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css'],
})
export class ForgetpasswordComponent implements OnInit {
  constructor(private service: PasswordService, private router: Router) {}
  url: any;
  x: any;
  message:any;
  src:any;
  wait:any='none';
   
  ngOnInit() {

  }
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  forgetPassword(email: any) {
    this.wait = "block";
    this.service.forgetPassword(email).subscribe(
      (res) => {
        this.x = res;
        this.url = this.x.yourUrl;
        console.log(res);
        console.log(this.url);
        localStorage.setItem('url', this.url);
        this.wait = "none";
        this.openPopup();
        this.src="assets/okay.gif";
        this.message= 'Check your email 🤩 🥳';
        this.router.navigateByUrl('/login', { replaceUrl: true });

      },
      (err) => {
        this.wait = "none";
        this.openPopup();
        this.src="assets/warning.gif";
        this.message = `Invalid Email
        please enter correct email 😔 `;
      }
    );
  }
}
