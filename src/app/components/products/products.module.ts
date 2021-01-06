import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  imports: [
    CommonModule,

    NzCardModule,
    NzGridModule,
    NzSelectModule,
    NzSpaceModule,
    NzButtonModule,
    NzSpinModule
    
  ],
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ]
})
export class ProductsModule { }
