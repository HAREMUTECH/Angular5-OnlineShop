import { ShoppingCart } from './shopping-cart';
export class Order {
datePlaced: number;
items: any[];

constructor (public UserId: string, public shipping: any,  cart: ShoppingCart) {
  this.datePlaced = new Date().getTime();

   this.items = cart.items.map(i => {
      return{
        product: {
          title: i.title,
          price: i.price,
          imageUrl: i.imageUrl
        },
        quantity: i.quantity,
        totalPrice: i.totalPrice
      };
    });
  }
}
