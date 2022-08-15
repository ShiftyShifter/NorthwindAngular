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
  displayDeletePopup: boolean = false;
  displayAddPopup: boolean = false;
  searchText: any;

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

  toggleInfoUI(item:any){
    this.displayInfoUI = !this.displayInfoUI;
    this.model = item; 
  }
  toggleInfoUI2(){
    this.displayInfoUI = !this.displayInfoUI;
  }

  AddProduct(){
    this._productService.postProduct(this.model).subscribe(
      {
        next: (data) =>{
          this.console.log(data);
        }
      }
    );
    setTimeout(() => {
      this.ngOnInit()
    }, 1000)
    this.displayAddUI = !this.displayAddUI;
    this._productService.getCategories().subscribe(data => this.products = data );
    this.displayAddPopup = !this.displayAddPopup;
    setTimeout(() => {
      this.displayAddPopup = !this.displayAddPopup;
    }, 1500)
  }

  RemoveProduct(id){
    this._productService.deleteProduct(id).subscribe();
    setTimeout(() => {
      this.ngOnInit()
    }, 300)
    this.displayDeletePopup = !this.displayDeletePopup;
    setTimeout(() => {
      this.displayDeletePopup = !this.displayDeletePopup;
    }, 1500)
  }

  UpdateProduct(id, product: ITestProducts){
    this._productService.putProduct(id, product).subscribe();
    // this._productService.getCategories().subscribe(newData =>
    //   this.products = newData);
  }

}
