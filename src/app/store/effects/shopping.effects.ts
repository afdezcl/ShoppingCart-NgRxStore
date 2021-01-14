import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, withLatestFrom, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { DeleteItemAction, DeleteItemFailureAction, DeleteItemSuccessAction, ReduceQuantityItemAction, ShoppingActionTypes } from '../actions/shopping.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state.model';
import { Product } from 'src/app/models/product.interface';


@Injectable()
export class ShoppingEffects {

  @Effect() reduceQuantityItem$ = this.actions$
    .pipe(
      ofType<ReduceQuantityItemAction>(ShoppingActionTypes.REDUCE_QUANTITY_ITEM),
      withLatestFrom(this.store),
      map(([action, state]: [ReduceQuantityItemAction, AppState]) => {
        const productToRemove: Product = state.shopping.list.find(product => product.quantity === 0);
        if (productToRemove) {
          return new DeleteItemAction(productToRemove.id);
        }
      }),
      filter(action => !!action)
    );

  @Effect() deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<DeleteItemAction>(ShoppingActionTypes.DELETE_ITEM),
      map((data) => new DeleteItemSuccessAction(data.payload)),
      catchError(error => of(new DeleteItemFailureAction(error)))
    );


  constructor(
    private store: Store,
    private actions$: Actions
  ) { }
}
