import { Component, OnInit } from '@angular/core';
import { TestProductsService } from '../services/test-products.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public products = [];

  constructor(private _productService: TestProductsService) { }

  ngOnInit(): void {
    this._productService.getCategories().subscribe(data => this.products = data );
  }

}
