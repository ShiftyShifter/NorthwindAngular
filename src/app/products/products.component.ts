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
  console = console;
  products: ITestProducts[];
  displayAddUI: boolean = false;
  displayInfoUI: boolean = false;

  model: any = {
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
    this._productService.getCategories().subscribe(data => this.products = data );
  }

  toggleAddUI(){
    this.displayAddUI = !this.displayAddUI;
  }

  toggleInfoUI(){
    this.displayInfoUI = !this.displayInfoUI;
  }

  AddProduct(){
    this._productService.postProduct(this.model).subscribe();
    this.displayAddUI = !this.displayAddUI;
  }

  RemoveProduct(id){
    this._productService.deleteProduct(id).subscribe();
  }

  UpdateProduct(id, product: ITestProducts){
    this._productService.putProduct(id, product).subscribe();
  }

}
