import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
orders$;
  constructor(private orderServices: OrderService) {
    this.orders$ = this.orderServices.getOrders();
  }

  ngOnInit() {
  }

}
