import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/products/product.service';


@Injectable()
export class ShoppingEffects {


  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) { }
}
