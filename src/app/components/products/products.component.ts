import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{


  public filteredCount = { count: 0 };
  public products: Product[];
  public categoriesSelected: string[] = [];
  public orderSelected: string;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe((response: Product[]) => {
        this.products = response;
        this.filteredCount.count = this.products.length;
      });
  }

  filterCategoryChange(value: string[]): void {
    this.categoriesSelected = value;
    this.filteredCount.count = this.products.length;
  }

}
