import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../components/product/product.component';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  products$: Observable<Product[]> = of([]);
  total$: Observable<number> = of(0);

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.products$ = this.shoppingCartService.getProducts()
    this.total$ = this.shoppingCartService.getTotalAmount()
  }

}
