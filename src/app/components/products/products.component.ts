import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe(response => console.log(response));
  }

}
