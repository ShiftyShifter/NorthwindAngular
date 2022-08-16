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
  displayDeletePopup: boolean = false;
  displayAddPopup: boolean = false;
  searchText: any;

  model: any = {
    firstName: '',
    lastName: '',
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

  AddEmployee(){
    this.employeeService.postEmployee(this.model).subscribe(
      {
        next: (data) =>{
          console.log(data);
        }
      }
    );
    setTimeout(() => {
      this.ngOnInit()
    }, 1000)
    this.displayAddUI = !this.displayAddUI;
    this.employeeService.getEmployees().subscribe(data => this.employees = data );
    this.displayAddPopup = !this.displayAddPopup;
    setTimeout(() => {
      this.displayAddPopup = !this.displayAddPopup;
    }, 1500)
  }

  RemoveEmployee(id){
    this.employeeService.deleteEmployee(id).subscribe();
    setTimeout(() => {
      this.ngOnInit()
    }, 300)
    this.displayDeletePopup = !this.displayDeletePopup;
    setTimeout(() => {
      this.displayDeletePopup = !this.displayDeletePopup;
    }, 1500)
  }

}
