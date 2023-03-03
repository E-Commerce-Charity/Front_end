import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  url: any;

  constructor(private http: HttpClient) {}

  forgetPassword(email: any) {
    return this.http.post('http://localhost:3000/auth/forgotpassword', {
      email: email,
    });
  }

  resetPassword(password: any) {
    this.url = localStorage.getItem('url');
    return this.http.put(this.url, { password: password });
  }
}
