import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories() {
    return this.http.get('http://localhost:3000/category');
  }

  getCategoryById(id: any) {
    return this.http.get(`http://localhost:3000/category/${id}`);
  }
}
