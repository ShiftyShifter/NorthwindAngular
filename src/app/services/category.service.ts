import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = "http://localhost:3030/api/categories";

  constructor(private http: HttpClient) { }
  
  getCategories(){
    return this.http.get<ICategory[]>(this.url);
  }

  postCategory(category: ICategory): Observable<ICategory>{
    return this.http.post<ICategory>(this.url, category);
  }

  deleteCategory(categoryId: number){
    return this.http.delete(this.url + "/" + categoryId);
  }
}
