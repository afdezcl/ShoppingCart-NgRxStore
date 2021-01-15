import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Product } from 'src/app/models/product.interface';
import { AddItemAction, AddItemSuccessAction, AddQuantityItemAction } from 'src/app/store/actions/shopping.actions';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private store: Store<AppState>,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
  }

  addItem(product: Product): void {
    product = { ...product, quantity: 1 };
    this.store.dispatch(new AddItemAction(product));
    this.message.create('success', 'Product added succesfully');
  }

}
