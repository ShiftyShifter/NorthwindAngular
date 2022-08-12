import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/ICategory';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3030/api/auth/login';
  constructor(private http: HttpClient) { 
  }

  loginServer(username: string, password:string){
    return this.http.post(this.url, {"username": username, "password": password})
  }
}
