import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  params = new HttpParams().set('page', '1').set('limit', '6');

  getProduct() {
    return this.http.get('http://localhost:3000/products/', {
      // params: this.params,
      params: new HttpParams().set('page', '1').set('limit', '6'),
    });
  }

  getPage(index: Number) {
    return this.http.get('http://localhost:3000/products/', {
      // params: this.params,
      params: new HttpParams().set('page', +index).set('limit', '6'),
    });
  }

  getAllProducts(total: any) {
    return this.http.get('http://localhost:3000/products/', {
      // params: this.params,
      params: new HttpParams().set('page', '1').set('limit', total),
      // params: new HttpParams().set('page', '1').set('limit', '6'),
    });
  }
}

/*
let params = new URLSearchParams();
    params.set('logNamespace', logNamespace);

    this._Http.get(`${API_URL}/api/v1/data/logs`, { search: params })
}
*/
