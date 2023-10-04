import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './services/shopping-cart.service';
import { Router } from '@angular/router';
import { Product } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  shoppingCartItems: Product[] = [];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shoppingCartService.getProducts()
      .subscribe(res => {
        this.shoppingCartItems = res;
      })
  }

  viewCart(): void {
    this.router.navigate(['/cart']);
  }
}
