import { Product } from 'src/app/models/product.interface';
import { ShoppingAction, ShoppingActionTypes } from '../actions/shopping.actions';

export interface ShoppingState {
  list: Product[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  list: [{
    category: 'men clothing',
    description: 'Your peeve, your everyday',
    id: 1,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    price: 110,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  }],
  loading: false,
  error: undefined
};

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction): ShoppingState {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state,
        loading: true
      };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false
      };

    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
      return {
        ...state,
        error: action.payload,
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
