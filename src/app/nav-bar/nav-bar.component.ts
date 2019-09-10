import { User } from './../model/user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../model/shopping-cart';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  User: User;
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  }

  async ngOnInit() {
    this.auth.appUser$.subscribe(User => this.User = User);
     this.cart$ = await this.shoppingCartService.getCart();

  }
logout() {
  this.auth.logout();
}
}
