import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
product$;
  constructor(private productServices: ProductService) {
    this.product$ = this.productServices.getAll();
  }

}
