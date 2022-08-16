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

  lang;
  language = {
    add: 'ADD',
    delete: 'Delete',
    update: 'Update',
    firstName: 'First Name',
    lastName: 'Last Name',
    country: 'Country',
    city: 'City',
    birthDate: 'Birth Date',
    added: 'Successfully added!',
    deleted: 'Successfully deleted!'
  }

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
    
    this.lang = localStorage.getItem('lang') || 'en';

    if (this.lang === 'en') {
      this.language = {
        add: 'ADD',
        delete: 'Delete',
        update: 'Update',
        firstName: 'First Name',
        lastName: 'Last Name',
        country: 'Country',
        city: 'City',
        birthDate: 'Birth Date',
        added: 'Successfully added!',
        deleted: 'Successfully deleted!'
      }
    }
    else {
      this.language = {
        add: 'EKLE',
        delete: 'Sil',
        update: 'Düzenle',
        firstName: 'Adı',
        lastName: 'Soyadı',
        country: 'Ülke',
        city: 'Şehir',
        birthDate: 'Dogum Tarihi',
        added: 'Başarıyla Eklendi!',
        deleted: 'Başarıyla Silindi!'
      }
    }
  }

  toggleAddUI() {
    this.displayAddUI = !this.displayAddUI;
  }

  AddEmployee() {
    this.employeeService.postEmployee(this.model).subscribe(
      {
        next: (data) => {
          console.log(data);
        }
      }
    );
    setTimeout(() => {
      this.ngOnInit()
    }, 1000)
    this.displayAddUI = !this.displayAddUI;
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
    this.displayAddPopup = !this.displayAddPopup;
    setTimeout(() => {
      this.displayAddPopup = !this.displayAddPopup;
    }, 1500)
  }

  RemoveEmployee(id) {
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
