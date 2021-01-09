import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { AppState } from 'src/app/store/models/app-state.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  isCollapsed = false;
  shoppingItems: Observable<Array<Product>>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
