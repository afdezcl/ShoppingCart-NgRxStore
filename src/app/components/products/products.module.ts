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
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { PipesModule } from 'src/app/ui-controls/pipes/pipe.module';
import { FilterCategoryPipe } from 'src/app/ui-controls/pipes/filterCategory.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    NzCardModule,
    NzGridModule,
    NzSelectModule,
    NzSpaceModule,
    NzButtonModule,
    NzSpinModule,
    NzCheckboxModule

  ],
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  providers: [
    FilterCategoryPipe
  ]
})
export class ProductsModule { }
