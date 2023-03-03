import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class userService {
  users: any;
  tokken: any = localStorage.getItem('token');
  private baseUrl = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}
  getAllUsers() {
    return this.http.get(this.baseUrl);
  }

  createUser(user: any) {
    return this.http.post<any>(`http://localhost:3000/auth/register`, user);
  }

  getUserById(id: number) {
    return this.http.get(`${this.baseUrl}${id}`);
  }

  updateUser(model: any, id: any, editUser: any) {
    return this.http.put(`${this.baseUrl}${id}`, editUser);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.baseUrl}${id}`);
  }

  login(user: any) {
    return this.http.post<any>(`http://localhost:3000/auth/login`, user);
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
