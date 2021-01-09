import { Product } from "src/app/models/product.interface";
import { ShoppingAction, ShoppingActionTypes } from "../actions/shopping.actions";

const initialState: Array<Product> = [{
  category: "men clothing",
  description: "Your peeve, your everyday",
  id: 1,
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  price: 110,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
}];

export function ShoppingReducer(state: Array<Product> = initialState, action: ShoppingAction) {
    switch (action.type) {
      case ShoppingActionTypes.ADD_ITEM:
        return [...state, action.payload];
      case ShoppingActionTypes.DELETE_ITEM:
        return state.filter(item => item.id !== action.payload);
      default:
        return state;
    }
  }