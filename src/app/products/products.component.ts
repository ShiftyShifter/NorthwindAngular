import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProducts } from '../models/IProducts';
import { ITestProducts } from '../models/ITestProducts';
import { ProductsList } from '../models/products-list';
import { TestProductsService } from '../services/test-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  console = console;
  products: ITestProducts[];
  displayAddUI: boolean = false;
  displayUpdateUI: boolean = false;
  displayInfoUI: boolean = false;
  displayDeletePopup: boolean = false;
  displayAddPopup: boolean = false;
  displayUpdatePopup: boolean = false;
  searchText: any;
  lang;
  language = {
    search: 'SEARCH',
    saveSearch: 'SAVE SEARCH',
    add: 'ADD',
    delete: 'Delete',
    update: 'Update',
    more: 'Info',
    productName: 'Product Name',
    price: 'Price',
    stock: 'Stock',
    added: 'Successfully added!',
    deleted: 'Successfully deleted!'
  }

  saveSearch() {
    localStorage.setItem('search', this.searchText);
  }

  model: any = {
    name: '',
    price: 0,
    stock: 0
  }

  modelUpdate: any = {
    id: 0,
    name: '',
    price: 0,
    stock: 0
  }

  id: any;
  constructor(private _productService: TestProductsService) {
    /* this.productsList = new ProductsList();
    this.products = this.productsList.getProducts(); */
  }

  ngOnInit(): void {
    this._productService.getCategories().subscribe(data => this.products = data);
    this.searchText = localStorage.getItem('search');

    this.lang = localStorage.getItem('lang') || 'en';

    if (this.lang === 'en') {
      this.language = {
        search: 'SEARCH',
        saveSearch: 'SAVE SEARCH',
        add: 'ADD',
        delete: 'Delete',
        update: 'Update',
        more: 'Info',
        productName: 'Product Name',
        price: 'Price',
        stock: 'Stock',
        added: 'Successfully added!',
        deleted: 'Successfully deleted!'
      }
    }
    else {
      this.language = {
        search: 'ARAMA',
        saveSearch: 'ARAMAYI KAYDET',
        add: 'EKLE',
        delete: 'Sil',
        update: 'Güncelle',
        more: 'Bilgi',
        productName: 'Ürün Adı',
        price: 'Fiyat',
        stock: 'Stok',
        added: 'Başarıyla eklendi!',
        deleted: 'Başarıyla silindi!'
      }
    }
  }

  toggleAddUI() {
    this.displayAddUI = !this.displayAddUI;
  }

  toggleUpdateUI() {
    this.displayUpdateUI = !this.displayUpdateUI;
  }

  toggleInfoUI(item: any) {
    this.displayInfoUI = !this.displayInfoUI;
    this.model = item;
  }
  toggleInfoUI2() {
    this.displayInfoUI = !this.displayInfoUI;
  }

  AddProduct() {
    this._productService.postProduct(this.model).subscribe(
      {
        next: (data) => {
          this.console.log(data);
        }
      }
    );
    setTimeout(() => {
      this.ngOnInit()
    }, 1000)
    this.displayAddUI = !this.displayAddUI;
    this._productService.getCategories().subscribe(data => this.products = data);
    this.displayAddPopup = !this.displayAddPopup;
    setTimeout(() => {
      this.displayAddPopup = !this.displayAddPopup;
    }, 1500)
  }

  http: HttpClient;
  onUpdateProductSubmit(data) {
    const body = data.value
    this.console.log(body);
    this.http.put('http://localhost:3030/api/products' + '/' + body.id, body).subscribe({
      next: (data) => {
        console.log(data)
        setTimeout(() => {
          location.replace('/products')
        }, 1000)
      }
    })
  }

  RemoveProduct(id) {
    this._productService.deleteProduct(id).subscribe();
    setTimeout(() => {
      this.ngOnInit()
    }, 300)
    this.displayDeletePopup = !this.displayDeletePopup;
    setTimeout(() => {
      this.displayDeletePopup = !this.displayDeletePopup;
    }, 1500)
  }

}
