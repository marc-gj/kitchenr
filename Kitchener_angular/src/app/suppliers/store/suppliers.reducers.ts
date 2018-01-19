import { Supplier } from '../supplier.model';
import * as fromSupplierActions from './suppliers.actions';
import { OfficeForm } from '../office/office.component';

export interface State {
  suppliers: Supplier[];
  suppliersEdit: OfficeForm[];
}

const initialState: State = { suppliers: [], suppliersEdit: [] };

/* Making changes to an instantiated class object results in changes throughout the application.
Therefore this reducer is used to call methods on the supplier class to make changes.
State is returned as the reducer expects it. */
export function suppliersReducer(state = initialState, action: fromSupplierActions.SupplierActions): State {
  switch (action.type) {
    case fromSupplierActions.SET_SUPPLIERS_FROM_SERVER: {
      return {
        ...state,
        suppliers: [...action.payload]
      };
    }
      case fromSupplierActions.SET_EDIT_MODE: {
        const supplier: Supplier | undefined = state.suppliers.find(element => element.id === action.payload.id);
        if (typeof supplier === 'undefined') {
          return {
            ...state
          };
        }
        supplier.state.editMode = true;
        return {
          ...state,
          suppliersEdit: [...state.suppliersEdit, action.payload]
        };
      }
      case fromSupplierActions.CANCEL_EDIT: {
        const supplier = state.suppliers.find(element => element.id === action.payload);
        if (typeof supplier === 'undefined') {
          return {
            ...state
          };
        }
        supplier.state.editMode = false;
        const supplierEditArray: OfficeForm[] = state.suppliersEdit.filter(element => element.id !== action.payload);
        return {
          ...state,
          suppliersEdit: [...supplierEditArray]
        };
      }
      case fromSupplierActions.UPDATE_SUPPLIER_EDIT: {
        const supplierEditArray = state.suppliersEdit.filter(element => element.id !== action.payload.id);
        return {
          ...state,
          suppliersEdit: [...supplierEditArray, action.payload]
        };
      }
    default:
      return state;
  }
}
