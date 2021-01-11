import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  imports: [
    CommonModule,
    NzMenuModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    NzLayoutModule
  ],
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
