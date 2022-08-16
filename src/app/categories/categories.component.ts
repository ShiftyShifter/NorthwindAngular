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
  lang;
  language = {
    add: 'Add',
    delete: 'Delete',
    update: 'Update',
    more: 'Info',
    categoryName: 'Category Name',
    description: 'Description',
    added: 'Successfully added!',
    deleted: 'Successfully deleted!'
  }

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
    this.categoryService.getCategories().subscribe(
      data => { this.categories = data; }
    );

    this.lang = localStorage.getItem('lang') || 'en';
    if (this.lang === 'en') {
      this.language = {
        add: 'Add',
        delete: 'Delete',
        update: 'Update',
        more: 'Info',
        categoryName: 'Category Name',
        description: 'Description',
        added: 'Successfully added!',
        deleted: 'Successfully deleted!'
      }
    }
    else {
      this.language = {
        add: 'Ekle',
        delete: 'Sil',
        update: 'Düzenle',
        more: 'Bilgi',
        categoryName: 'Kategori Adı',
        description: 'İçerikler',
        added: 'Başarıyla Eklendi!',
        deleted: 'Başarıyla Silindi!'
      }
    }
  }

  toggleAddUI() {
    this.displayAddUI = !this.displayAddUI;
    console.log(this.displayAddUI);
  }

  AddCategory() {
    this.categoryService.postCategory(this.model).subscribe(
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
    this.categoryService.getCategories().subscribe(data => this.categories = data);
    this.displayAddPopup = !this.displayAddPopup;
    setTimeout(() => {
      this.displayAddPopup = !this.displayAddPopup;
    }, 1500)
  }

  RemoveCategory(id) {
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


