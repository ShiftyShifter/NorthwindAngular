import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../models/IEmployee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employees: IEmployee[];
  displayAddUI: boolean = false;
  searchText: any;

  model: any = {
    firstName: '',
    lastName: 0,
    title: '',
    country: '',
    city: '',
    birthDate: ''
  }

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data
    );
  }

  toggleAddUI(){
    this.displayAddUI = !this.displayAddUI;
  }

}
