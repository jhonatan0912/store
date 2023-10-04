import { Component, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
}

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
