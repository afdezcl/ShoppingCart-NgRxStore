import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Pipe({
  name: 'filterOrder'
})
export class FilterOrderPipe implements PipeTransform {

  transform(products: Product[], orderBy: string): Product[] {
    switch (orderBy) {
      case 'Lowest to Highest': return products.sort((a: Product, b: Product) => a.price - b.price);
      case 'Highest to Lowest': return products.sort((a: Product, b: Product) => b.price - a.price);
      default: return products;
    }
  }

}
