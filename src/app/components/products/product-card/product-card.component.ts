import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';
import { AddItemAction } from 'src/app/store/actions/shopping.actions';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  addItem(product) {
    this.store.dispatch(new AddItemAction(product));
  }

}
