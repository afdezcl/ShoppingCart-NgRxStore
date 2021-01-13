import { Action } from '@ngrx/store';
import { Product } from 'src/app/models/product.interface';

export enum ShoppingActionTypes {
    LOAD_SHOPPING = '[SHOPPING] Load Shopping',
    LOAD_SHOPPING_SUCCESS = '[SHOPPING] Load Shopping Success',
    LOAD_SHOPPING_FAILURE = '[SHOPPING] Load Shopping Failure',
    ADD_ITEM = '[SHOPPING] Add Item',
    ADD_ITEM_SUCCESS = '[SHOPPING] Add Item Success',
    ADD_ITEM_FAILURE = '[SHOPPING] Add Item Failure',
    DELETE_ITEM = '[SHOPPING] Delete Item',
    DELETE_ITEM_SUCCESS = '[SHOPPING] Delete Item Success',
    DELETE_ITEM_FAILURE = '[SHOPPING] Delete Item Failure'
}

export class LoadShoppingAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING;
}

export class LoadShoppingSuccessAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;
    constructor(public payload: Array<Product>) { }
}

export class LoadShoppingFailureAction implements Action {
    readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;
    constructor(public payload: Error) { }
}

export class AddItemSuccessAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;
    constructor(public payload: Product) { }
}

export class AddItemFailureAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;
    constructor(public payload: Error) { }
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;
    constructor(public payload: Product) { }
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
    LoadShoppingAction |
    LoadShoppingFailureAction |
    LoadShoppingSuccessAction;