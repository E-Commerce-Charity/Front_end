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
  constructor(
    private service: PasswordService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      // let resetToken = params['resettoken'];

      console.log(params); // OUTPUT 123
    });
  }

  resetPassword(password: any) {
    console.log(password);
    return this.service.resetPassword(password).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
