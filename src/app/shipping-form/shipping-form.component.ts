import { ShoppingCart } from './../model/shopping-cart';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Order } from '../model/order';
@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  userSubscription: Subscription;

  constructor(private authServices: AuthService,
    private orderService: OrderService,
    private route: Router) { }

  ngOnInit() {
    this.userSubscription = this.authServices.user$.subscribe(user => this.userId = user.uid);
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.route.navigate(['/order-success', result.key]);
  }
}
