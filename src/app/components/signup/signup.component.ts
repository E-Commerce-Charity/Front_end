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

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  users: any;
  signUpForm: any;
  localToken: any;
  formValid: boolean | undefined;
  role: any = 'user';

  user: {
    name: string;
    email: string;
    password: string;
    gender: string;
    phone: any;
    address: string;
    showPassword: boolean;
  } = {
    name: '',
    email: '',
    password: '',
    gender: '',
    phone: null,
    address: '',
    showPassword: false,
  };

  token: any;
  id: any;
  reactiveForm: any;

  constructor(
    public myService: userService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        this.users = this.users.data.users;
        console.log(this.users);
      },
      (error) => {
        console.log(error);
      }
    );

    this.signUpForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl(
        this.user.email,
        [
          Validators.required,
          Validators.email,
          // Validators.pattern('[a-z0-9]+@[a-z]+.[a-z]{2,3}'),
        ],
        [emailExistsValidator(this.myService)?.bind(this)]
      ),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ]),
      gender: new FormControl(this.user.gender, [Validators.required]),
      phone: new FormControl(this.user.phone, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),

      address: new FormControl(this.user.address, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get gender() {
    return this.signUpForm.get('gender');
  }

  get phone() {
    return this.signUpForm.get('phone');
  }

  get address() {
    return this.signUpForm.get('address');
  }

  public validate(): void {
    if (this.signUpForm.invalid) {
      for (const control of Object.keys(this.signUpForm.controls)) {
        this.signUpForm.controls[control].markAsTouched();
        console.log(control + 'is invalid');
      }
      return;
    }
  }

  public validateEmail(): any {
    // this.users.find((item: any) => {
    //   if (item.email === this.email.value) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    // return false;
  }

  onSubmit() {
    // Handle form submission here
    if (this.signUpForm.valid) {
      console.log('Form submitted successfully');
    } else {
      console.log('Form is invalid');
    }

    if (this.myService.checkEmailExists(this.user.email)) {
      this.formValid = false;
    } else {
      this.formValid = true;
    }

    console.log(this.signUpForm.value); //user
    this.myService.createUser(this.signUpForm.value).subscribe(
      (response) => {
        this.token = response.token;
        console.log(this.token);
        localStorage.setItem('token', this.token);
        this.localToken = localStorage.getItem('token');
        this.id = response.user._id;
        localStorage.setItem('id', response.user._id);
        this.role = response.user.role;
        localStorage.setItem('role', response.user.role);
        console.log(this.role);

        // Navigate to the home path
        this.router.navigateByUrl('/', { replaceUrl: true });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
