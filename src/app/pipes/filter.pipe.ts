import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../components/product/product.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(products: Product[], ...args: unknown[]): Product[] {
    const searchText = args[0] as string;
    if (!products || !searchText) {
      return products;
    }
    return products.filter(product => product.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }
}
