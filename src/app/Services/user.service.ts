import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class userService {
  auth_token: any = localStorage.getItem('token');
  // id: any = localStorage.getItem('id');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });

  params = new HttpParams().set('page', '1').set('limit', '59');
  options = { params: this.params, headers: this.headers };

  users: any;
  tokken: any = localStorage.getItem('token');
  private baseUrl = 'https://harity.onrender.com/users/';

  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get(this.baseUrl, {
      headers: this.headers,
    });
  }

  createUser(user: any) {
    return this.http.post<any>(`https://harity.onrender.com/auth/register`, user);
  }

  getUserById(id: any) {
    return this.http.get(`${this.baseUrl}${id}`, {
      headers: this.headers,
    });
  }

  updateUser(id: any, editUser: any) {
    return this.http.patch(`${this.baseUrl}${id}`, editUser, {
      headers: this.headers,
    });
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}${id}`);
  }
  GetOrder() {
    return this.http.get('https://harity.onrender.com/oreders/', this.options);
  }
  login(user: any) {
    return this.http.post<any>(`https://harity.onrender.com/auth/login`, user);
  }

  checkEmailExists(email: string): Observable<boolean> {
    this.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        this.users = this.users.data.users;
      },
      (error) => {
        console.log(error);
      }
    );

    const res = this.users.find((user: any) => user.email === email)?.email;
    return res;
  }

  checkEmailandpassword(email: string) {
    this.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        this.users = this.users.data.users;
      },
      (error) => {
        console.log(error);
      }
    );

    console.log(this.users);
    const user = this.users.find((user: any) => user.email === email);
    console.log(user);
    if (user.token == this.tokken) {
      console.log('password is correct');
      return 'password is correct';
    } else {
      console.log('password is not correct');
      return 'password is not correct';
    }
  }
  checkEmailNotExists(email: string): Observable<boolean> {
    this.getAllUsers().subscribe(
      (response) => {
        this.users = response;
        this.users = this.users.data.users;
      },
      (error) => {
        console.log(error);
      }
    );

    const res = this.users.find((user: any) => user.email !== email)?.email;
    return res;
  }
}
