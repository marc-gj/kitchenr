/* import * as fromDataStorageActions from './datastorage.actions';
import { Supplier } from '../suppliers/supplier.model';

export interface State {
  suppliers: Supplier[];
}

const initialState = {
  suppliers: []
};

export function dataStorageReducer(state: State = initialState, action: fromDataStorageActions.DataStorageActions) {
  switch (action.type) {
    case fromDataStorageActions.SET_DATA_FROM_SERVER:
    console.log(action.payload);
    return {
      ...state,
      suppliers: action.payload
    };
    default:
    return state;
  }

} */
