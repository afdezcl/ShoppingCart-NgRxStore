import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
    DELETE_ITEM = '[SHOPPING] Delete Item',
    DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
    DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure',
    ADD_QUANTITY_ITEM = '[SHOPPING] Add Quantity to Item',
    REDUCE_QUANTITY_ITEM = '[SHOPPING] Reduce Quantity to Item',
}

export class AddQuantityItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_QUANTITY_ITEM;
    constructor(public payload: Product) { }
}

export class ReduceQuantityItemAction implements Action {
    readonly type = ShoppingActionTypes.REDUCE_QUANTITY_ITEM;
    constructor(public payload: Product) { }
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: Product) { }
}

export class AddItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: Product) { }
}

export class AddItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
    constructor(public payload: Error) { }
}

export class DeleteItemAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM;
    constructor(public payload: number) { }
}

export class DeleteItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_SUCCESS;
    constructor(public payload: number) { }
}

export class DeleteItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.DELETE_ITEM_FAILURE;
    constructor(public payload: Error) { }
}

export type ShoppingAction = AddItemAction |
    AddItemSuccessAction |
    AddItemFailureAction |
    DeleteItemAction |
    DeleteItemSuccessAction |
    DeleteItemFailureAction |
    AddQuantityItemAction |
    ReduceQuantityItemAction;
