import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.scss']
})
export class ProductComponent {

  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  @Input() product!: Product;

  addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
}
