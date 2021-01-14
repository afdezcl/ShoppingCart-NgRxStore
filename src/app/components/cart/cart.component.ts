import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { AddItemSuccessAction, AddQuantityItemAction, DeleteItemAction, DeleteItemSuccessAction, ReduceQuantityItemAction } from 'src/app/store/actions/shopping.actions';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public isCollapsed = true;
  public shoppingItems$: Observable<Array<Product>>;
  public totalPrice: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.shoppingItems$ = this.store.select(store => store.shopping.list);
    this.calculateTotalPrice();
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  deleteItem(product: Product): void {
    this.store.dispatch(new DeleteItemSuccessAction(product.id));
  }

  calculateTotalPrice(): void {
    this.shoppingItems$.subscribe((products: Product[]) => {
      if (products.length > 0) {
        this.totalPrice = products.map(item => item.price * item.quantity).reduce((a, b) => a + b);
      } else {
        this.totalPrice = undefined;
      }
    });
  }

  addQuantityToItem(product: Product): void {
    this.store.dispatch(new AddQuantityItemAction(product));
  }

  reduceQuantityToItem(product: Product): void {
    this.store.dispatch(new ReduceQuantityItemAction(product));
  }


}
