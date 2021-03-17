import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`${environment.baseURL}/product`);
  }
  addToCart(payload) {
    console.log(`${environment.baseURL}/cart`+ JSON.stringify(payload));
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }
  getAllCartItems() {
    return this.http.get(`${environment.baseURL}/cart/checkout`);
  }
  addQty(payload) {
    return this.http.post(`${environment.baseURL}/cart`, payload);
  }
}