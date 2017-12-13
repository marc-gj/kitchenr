import { Supplier } from '../supplier.model';
import * as fromSupplierActions from './suppliers.actions';

export interface State {
  suppliers: Supplier[];
}

const initialState: State = { suppliers: [] };


export function suppliersReducer(state = initialState, action: fromSupplierActions.SupplierActions): State {
  switch (action.type) {
    case fromSupplierActions.SET_SUPPLIERS_FROM_SERVER:
      return {
        ...state,
        suppliers: [...action.payload]
      };
    default:
      return state;
  }
}
