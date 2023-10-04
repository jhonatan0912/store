import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: 'shopping-cart-item.component.html',
  styleUrls: ['shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {

  @Input() product!: Product;

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  remove() {
    this.shoppingCartService.deleteProduct(this.product);
  }
}
