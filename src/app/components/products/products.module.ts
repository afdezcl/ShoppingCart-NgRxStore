import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    CommonModule,

    NzCardModule,
    NzGridModule,
    
  ],
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ]
})
export class ProductsModule { }
