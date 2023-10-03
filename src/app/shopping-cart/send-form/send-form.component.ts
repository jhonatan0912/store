import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-send-form',
  templateUrl: 'send-form.component.html',
  styleUrls: ['send-form.component.scss']
})
export class SendFormComponent {

  constructor(private shoppingCartService: ShoppingCartService) { }

  submit() {
    this.shoppingCartService.clearCart();
  }
}
