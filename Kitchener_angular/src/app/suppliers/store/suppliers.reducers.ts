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
      case fromSupplierActions.SET_EDIT_MODE:
      let array = state.suppliers;
      let supplier: Supplier = array[action.payload];
      supplier.state.editMode = true;
      array.splice(action.payload, 1, supplier);
      console.log('Hey from set edit');
      return {
        ...state,
        suppliers: [...array]
      };
      case fromSupplierActions.CANCEL_EDIT:
      array = state.suppliers;
      supplier = array[action.payload];
      supplier.state.editMode = false;
      array.splice(action.payload, 1, supplier);
      console.log('Hey from cancel edit');
      return {
        ...state,
        suppliers: [...array]
      };
      case fromSupplierActions.UPDATE_SUPPLIER:
      array = state.suppliers;
      supplier = action.payload.supplier;
      supplier.state.editMode = false;
      array.splice(action.payload.index, 1, supplier);
      console.log('Hey from save');
      return {
        ...state,
        suppliers: [...array]
      };
    default:
      return state;
  }
}
