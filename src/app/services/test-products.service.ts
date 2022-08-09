import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITestProducts } from '../models/ITestProducts';

@Injectable({
  providedIn: 'root'
})
export class TestProductsService {

  url = "http://localhost:3030/api/products";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ITestProducts[]>{
    return this.http.get<ITestProducts[]>(this.url);
  }
}
