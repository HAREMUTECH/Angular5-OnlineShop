import { ShoppingCart } from './../model/shopping-cart';
import { Product } from './../model/product';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input('product') product: Product;
// tslint:disable-next-line: no-input-rename
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart: ShoppingCart;

constructor(private cartService: ShoppingCartService) {
}


addToCart() {
  this.cartService.addToCart(this.product);
}

}
