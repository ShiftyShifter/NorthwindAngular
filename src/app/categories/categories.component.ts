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
  displayAddUI: boolean = false;
  displayDeletePopup: boolean = false;
  displayAddPopup: boolean = false;

  model: any = {
    name: '',
    description: ''
  }

  constructor(private categoryService: CategoryService, private loginService: LoginService) {
    // this.loginService.loginServer().subscribe(
    //   result => { localStorage.setItem('id_token', result.toString()) }
    // );
  }

  ngOnInit(): void {
    /* this.loginService.loginServer().subscribe(
      data => console.log(data)
    ); */
     this.categoryService.getCategories().subscribe(
      data => { this.categories = data; }
    );
  }

  toggleAddUI(){
    this.displayAddUI = !this.displayAddUI;
    console.log(this.displayAddUI);
  }

  AddCategory(){
    this.categoryService.postCategory(this.model).subscribe(
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
    this.categoryService.getCategories().subscribe(data => this.categories = data );
    this.displayAddPopup = !this.displayAddPopup;
    setTimeout(() => {
      this.displayAddPopup = !this.displayAddPopup;
    }, 1500)
  }

  RemoveCategory(id){
    this.categoryService.deleteCategory(id).subscribe();
    setTimeout(() => {
      this.ngOnInit()
    }, 300)
    this.displayDeletePopup = !this.displayDeletePopup;
    setTimeout(() => {
      this.displayDeletePopup = !this.displayDeletePopup;
    }, 1500)
  }

}


