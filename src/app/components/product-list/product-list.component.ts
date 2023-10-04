import { Component } from '@angular/core';
import { products } from './mock';
import { Product } from 'src/app/interfaces';


@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.scss']
})
export class ProductListComponent {

  products: Product[] = products;
  searchValue: string = '';
}