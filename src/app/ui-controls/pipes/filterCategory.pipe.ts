import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product.interface';

@Pipe({
  name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(products: Product[], categories: string[]): Product[] {
    if (!categories.length) {
      return products;
    }
    return products.filter(item => categories.some(coincidence => coincidence === item.category));
  }

}
