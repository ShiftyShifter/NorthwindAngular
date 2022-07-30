import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allowAddButton: boolean = true;
  productName: string;
  products = [];
  customColor: string;

  onUpdateProductName(event: Event){
    //console.log(event);
    if((<HTMLInputElement>event.target).value == ""){
      this.allowAddButton = true;
    }
    else{
      this.allowAddButton = false;
    }
  }

  onAddProduct(){
    this.products.push(this.productName);
    this.productName = "";
    this.allowAddButton = true;
  }

  getColor(){
    return this.productName === 'online' ? 'green' : 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
