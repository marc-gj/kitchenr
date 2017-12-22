import { Supplier } from '../supplier.model';
import * as fromSupplierActions from './suppliers.actions';

export interface State {
  suppliers: Supplier[];
}

const initialState: State = { suppliers: [] };

/* Making changes to an instantiated class object results in changes throughout the application.
Therefore this reducer is used to call methods on the supplier class to make changes.
State is returned as the reducer expects it. */
export function suppliersReducer(state = initialState, action: fromSupplierActions.SupplierActions): State {
  switch (action.type) {
    case fromSupplierActions.SET_SUPPLIERS_FROM_SERVER:
      return {
        ...state,
        suppliers: [...action.payload]
      };
      case fromSupplierActions.SET_EDIT_MODE:
      let supplier: Supplier = state.suppliers.find(element => element.id === action.payload);
      supplier.state.editMode = true;
      return state;
      case fromSupplierActions.CANCEL_EDIT:
      supplier = state.suppliers.find(element => element.id === action.payload);
      supplier.state.editMode = false;
      return state;
    default:
      return state;
  }
}
