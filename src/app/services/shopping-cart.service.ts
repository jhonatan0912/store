import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  shoppingCartProducts: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  addToCart(product: any) {
    let products = this.shoppingCartProducts.getValue();
    if (!products) {
      products = [];
    }
    let productExist = products.find((item: any) => item.id === product.id);
    if (!productExist) {
      products.push(product);
      this.shoppingCartProducts.next(products);
    }
  }

  getProducts() {
    return this.shoppingCartProducts.asObservable();
  }

  clearCart() {
    this.shoppingCartProducts.next([]);
  }

  deleteProduct(product: any) {
    let products = this.shoppingCartProducts.getValue();
    products = products.filter((item: any) => item.id !== product.id);
    this.shoppingCartProducts.next(products);
  }

  getTotalAmount() {
    return this.shoppingCartProducts.pipe(
      map(product => {
        return product.reduce((acc: any, item: any) => acc + item.price, 0)
      })
    );
  }

}
