import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from '../models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:3030/api/contact-us"

  constructor(private http: HttpClient) { }

  getContacts(): Observable<IContact[]>{
    return this.http.get<IContact[]>(this.url);
  }
}
