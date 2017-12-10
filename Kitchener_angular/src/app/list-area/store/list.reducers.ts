import * as fromListActions from './list.actions';
import { Supplier } from '../../suppliers/supplier.model';
import { Stock } from '../../stock/stock.model';
import { Ingredient } from '../../ingredients/ingredient.model';

export interface State {
  suppliers?: any[];
  stock?: Stock[];
  ingredients?: Ingredient[];
  recipes?: Recipe[];
  dishes?: Dish[];
}

const initialState = {};

export function listReducer(state: State = initialState, action: fromListActions.ListAction) {
  switch (action.type) {
    case fromListActions.SET_LIST_STATE_TO_SUPPLIERS:
    return {
      ...state,
      suppliers: action.payload
    };
    default:
    return state;
  }
}
