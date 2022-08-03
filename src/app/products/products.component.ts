import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/IProducts';
import { ProductsList } from '../models/products-list';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProducts[];
  productsList: ProductsList;
  console = console;

  constructor() {
    this.productsList = new ProductsList();
    this.products = this.productsList.getProducts();
   }

  ngOnInit(): void {
  }

}
