import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';


export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure'
};

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: Product) {}
};

export type ShoppingAction = AddItemAction;