import { stat } from 'fs';
import { Product } from 'src/app/models/product.interface';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

export interface ShoppingState {
  list: Product[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined
};

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction): ShoppingState {
  switch (action.type) {
    case ShoppingActionTypes.ADD_QUANTITY_ITEM:
      return {
        ...state,
        list: state.list.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity + 1 } : item),
        loading: false
      };
    case ShoppingActionTypes.REDUCE_QUANTITY_ITEM:
      return {
        ...state,
        list: state.list.map(item => item.id === action.payload.id ? { ...item, quantity: action.payload.quantity - 1 } : item),
        loading: false
      };
    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false
      };
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case ShoppingActionTypes.DELETE_ITEM:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
        loading: false
      };
    case ShoppingActionTypes.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
