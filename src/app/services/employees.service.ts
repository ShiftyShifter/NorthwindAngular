import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url = "http://localhost:3030/api/employees";
  deleteURL = "http://localhost:3030/api/employees/";

  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }

  postEmployee(product: IEmployee): Observable<IEmployee>{
    return this.http.post<IEmployee>(this.url, product);
  }

  deleteEmployee(employeeId: number){
    return this.http.delete(this.url + "/" + employeeId);
  }
}
