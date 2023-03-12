import { AuthService } from './../../Services/guardAuth.service';
import { userService } from './../../Services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { Router } from '@angular/router';
import { emailExistsValidator } from 'src/app/Directives/EmailExistValidator';
import { loginValidator } from 'src/app/Directives/loginValidate';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users: any;
  allUsers: any = [];
  loginForm: any;
  localToken: any;
  formValid: boolean | undefined;
  usertoken: any;
  emailRes: any;
  isLogged: any;

  user: {
    email: string;
    password: string;
    showPassword: boolean;
    emailRes: any;
  } = {
    email: '',
    password: '',
    showPassword: false,
    emailRes: '',
  };

  token: any;
  id: any;
  reactiveForm: any;
  wait:any='none';
  constructor(
    public myService: userService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (response) => {
        console.log(response);
        this.users = response;
        this.users = this.users.data.users;
      },
      (error) => {
        console.log(error);
      }
    );

    this.loginForm = new FormGroup({
      email: new FormControl(
        this.user.email,
        [Validators.required, Validators.email],
        [loginValidator(this.myService)?.bind(this)]
      ),
      password: new FormControl(
        this.user.password,
        [Validators.required],
        [loginValidator(this.myService)?.bind(this)]
      ),
    });
    console.log(this.allUsers);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public validate(): void {
    if (this.loginForm.invalid) {
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAsTouched();
        console.log(control + 'is invalid');
      }
    }
  }

  onSubmit() {
    this.wait = "block";
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {

        this.wait = "none";
      
        // If the login is successful, redirect the user to the home page
        // and store the user's token in local storage
        localStorage.setItem('token', response.token);
        console.log(response);

        localStorage.setItem('usertoken', this.usertoken);
        this.token = response.user.token;

        this.localToken = localStorage.getItem('token');
        console.log(this.localToken);
        this.id = response.user._id;
        localStorage.setItem('id', response.user._id);

        // this.id = response.user._id;
        // localStorage.setItem('id', response.user._id);
        // Navigate to home page or some other protected route
        this.router.navigateByUrl('/', { replaceUrl: true });
        if (response && response.token) {
          this.authService.setAuthToken(response.token);
          this.isLogged = true;
          // Redirect the user to the protected route
          this.authService.setNavigationUrls(response.user.role);
        } else {
          this.isLogged = false;
        }
        localStorage.setItem('logged', this.isLogged);
      },
      (error) => {
        this.wait = "none";
        // If the login fails, display an error message
        console.log('Login failed', error);
        this.emailRes = error.error.message;
        console.log(error.error.message);
      }
    );

    // Handle form submission here
    if (this.loginForm.valid) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form is invalid');
    }

    if (this.myService.checkEmailNotExists(this.user.email)) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }

    //   this.myService.login(this.loginForm.value).subscribe(
    //   //   (response) => {
    //   //     // If the login is successful, redirect the user to the home page
    //   //     // and store the user's token in local storage
    //   //     localStorage.setItem('token', response.token);
    //   //     console.log(response);

    //   //     localStorage.setItem('usertoken', this.usertoken);
    //   //     this.token = response.user.token;

    //   //     this.localToken = localStorage.getItem('token');
    //   //     console.log(this.localToken);
    //   //     this.id = response.user._id;
    //   //     localStorage.setItem('id', response.user._id);

    //   //     // this.id = response.user._id;
    //   //     // localStorage.setItem('id', response.user._id);
    //   //     // Navigate to home page or some other protected route
    //   //     this.router.navigateByUrl('/', { replaceUrl: true });
    //   //   },
    //   //   (error) => {
    //   //     // If the login fails, display an error message
    //   //     console.log('Login failed', error);
    //   //     this.emailRes = error.error.message;
    //   //     console.log(error.error.message);
    //   //   }
    //   // );
    // }

    // getErrorMessage() {
    //   if (this.email.hasError('emailExistsValidator')) {
    //     return 'email is not exist';
    //   }
    //   return '';
    // }
    // // getPasswordMessage() {
    // //   if (this.password.hasError('required')) {
    // //     return 'You must enter a value';
    // //   }
    // //   return this.password.hasError('password') ? 'Not a valid password' : '';
    // // }
    // // hide = true;
  }
}
