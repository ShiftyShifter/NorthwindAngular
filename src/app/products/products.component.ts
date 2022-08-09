import { Component, OnInit } from '@angular/core';
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
  /* products: IProducts[];
  productsList: ProductsList; */
  console = console;
  products: ITestProducts[];
  

  constructor(private _productService: TestProductsService) {
    /* this.productsList = new ProductsList();
    this.products = this.productsList.getProducts(); */
   }

  ngOnInit(): void {
    this._productService.getCategories().subscribe(data => this.products = data );
  }

}
