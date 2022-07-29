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
    //console.log(this.products + this.productName);
  }

  clickMe(productName:string){
    console.log('it does nothing', productName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
