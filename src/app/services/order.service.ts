import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { query } from '@angular/core/src/animation/dsl';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService, private db: AngularFireDatabase) { }

  async placeOrder(order) {
   const result = await this.db.list('/orders').push(order);
   this.shoppingCartService.clearCart();
   return result;
  }

  getOrders() {
    return this.db.list('/orders');
  }

  getOrderByUser(userId: string) {
   return this.db.list('/orders/', {
      query: {
        orderByChild: 'userId',
        equalTo: userId
      }
    }
    );
  }
}
