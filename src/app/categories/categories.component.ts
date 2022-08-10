import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/ICategory';
import { CategoryService } from '../services/category.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(private categoryService: CategoryService, private loginService: LoginService) {
    this.loginService.loginServer().subscribe(
      result => { localStorage.setItem('id_token', result.toString()) }
    );
  }

  ngOnInit(): void {
    /* this.loginService.loginServer().subscribe(
      data => console.log(data)
    ); */

     this.categoryService.getCategories().subscribe(
      data => { this.categories = data; }
    );
  }
}


