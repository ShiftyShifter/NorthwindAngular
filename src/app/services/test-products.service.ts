import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITestProducts } from '../models/ITestProducts';

@Injectable({
  providedIn: 'root'
})
export class TestProductsService {

  
  url = "http://localhost:3030/api/products";
  deleteURL = "http://localhost:3030/api/products/";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ITestProducts[]>{
    return this.http.get<ITestProducts[]>(this.url);
  }

  postProduct(product: ITestProducts): Observable<ITestProducts>{
    return this.http.post<ITestProducts>(this.url, product);
  }

  deleteProduct(productId: number){
    return this.http.delete(this.url + "/" + productId);
  }

  putProduct(productId: number, product: ITestProducts){
    return this.http.put(this.url + "/" + productId, product);
  }

  getOneProduct(): Observable<ITestProducts>{
    return this.http.get<ITestProducts>(this.url);
  }
}
