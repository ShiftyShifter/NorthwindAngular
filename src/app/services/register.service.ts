import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:3030/api/auth/register';
  constructor(private http: HttpClient) { 
  }

  registerServer(firstName: string, lastName:string, userName: string, password){
    return this.http.post(this.url, {"firstName": firstName, "lastName": lastName, "username": userName, "password": password})
  }
}
