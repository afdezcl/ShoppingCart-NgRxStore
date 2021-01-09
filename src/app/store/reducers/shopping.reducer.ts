import { Product } from "src/app/models/product.interface";
import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";

const initialState: Array<Product> = [];

export function ShoppingReducer(state: Array<Product> = initialState, action: ShoppingAction) {
    switch (action.type) {
      case ShoppingActionTypes.ADD_ITEM:
        return [...state, action.payload];
      default:
        return state;
    }
  }