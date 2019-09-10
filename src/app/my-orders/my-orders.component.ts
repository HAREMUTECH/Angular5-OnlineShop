import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
orders$;
  constructor(private orderService: OrderService, private authService: AuthService) {
    this.orders$ = this.authService.user$.switchMap( u => this.orderService.getOrderByUser(u.uid));
   }


}
