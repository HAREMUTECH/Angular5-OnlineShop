import { ShoppingCart } from './../model/shopping-cart';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCartService } from './../services/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
cart$: Observable <ShoppingCart>;

  constructor(private shoppingCartServices: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.shoppingCartServices.getCart();
  }

}
