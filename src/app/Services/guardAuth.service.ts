import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticate: boolean = false;
  private tokenKey: string = 'auth_token';
  navigationUrls: string[] = [];

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    this.isAuthenticate = true;
    return this.http.post<any>(`http://localhost:3000/auth/login`, user);
    // pipe(
    //   tap((response: any) => {
    //     const token = response.token;
    //     localStorage.setItem(this.tokenKey, token);
    //   })
    // );
  }

  // getToken(): string {
  //   let res = localStorage.getItem(this.tokenKey);
  //   return res?.toString()?.trim() || '';
  // }

  // logout() {
  //   // Implement your logout logic here
  //   this.isAuthenticate = false;
  // }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  setAuthToken(authToken: string): void {
    localStorage.setItem('authToken', authToken);
  }

  getAuthToken(): string {
    return localStorage.getItem('authToken')?.toString()?.trim() || '';
  }

  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }

  isAuthenticated(): boolean {
    return this.isAuthenticate;
  }

  setNavigationUrls(role: string): void {
    switch (role) {
      case 'admin':
        this.navigationUrls = ['/admin', '/users', '/settings'];
        break;
      case 'user':
        this.navigationUrls = ['/profile', '/cart', '/product','/thanks'];
        break;
      default:
        this.navigationUrls = ['/admin'];
        break;
    }
  }

  getNavigationUrls(): string[] {
    return this.navigationUrls;
  }
}
