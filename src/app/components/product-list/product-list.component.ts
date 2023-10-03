import { Component } from '@angular/core';
import { Product } from '../product/product.component';
import { products } from './mock';


@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent {

  products: Product[] = products;
  searchText: string = '';
}