import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  params = new HttpParams()
    // .set('sort', "description")
    .set('page', '2')
    .set('limit', '4');

  getProduct() {
    return this.http.get('http://localhost:3000/products/', {
      params: this.params,
    });
  }
}

/*
let params = new URLSearchParams();
    params.set('logNamespace', logNamespace);

    this._Http.get(`${API_URL}/api/v1/data/logs`, { search: params })
}
*/
