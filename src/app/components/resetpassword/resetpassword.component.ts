import { Component, OnInit } from '@angular/core';
import { PasswordService } from 'src/app/Services/password.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  url: any;
  x: any;
  message:any;
  src:any;
  wait:any='none';
   

  displayStyle = "none";

  constructor(
    private service: PasswordService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {});
  }
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  resetPassword(password: any) {
    console.log(password);
    this.wait = "block";

    return this.service.resetPassword(password).subscribe(
      (res) => {
        this.wait = "none";
        console.log(res);
        this.wait = "none";
        this.openPopup();
        this.src="assets/okay.gif";
        this.message= 'password set correctly 🤩 🥳';

      },
      (err) => {
        this.wait = "none";
        this.openPopup();
        this.src="assets/warning.gif";
        this.message = `Invalid password😔 `;
      }
    );
  }
}
