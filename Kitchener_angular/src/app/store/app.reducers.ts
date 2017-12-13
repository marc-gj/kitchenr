import { ActionReducerMap } from '@ngrx/store';
import * as fromUsers from '../users/store/users.reducers';
import * as fromAuth from '../users/auth/auth.reducers';
import * as fromCounter from '../users/auth/counter.reducers';
/* import * as fromDataStorage from '../datastorage/datastorage.reducers'; */
import * as fromSuppliers from '../suppliers/store/suppliers.reducers';

export interface AppState {
  users: fromUsers.State;
  auth: fromAuth.State;
  counter: fromCounter.State;
/*   data: fromDataStorage.State; */
  suppliers: fromSuppliers.State;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUsers.usersReducer,
  auth: fromAuth.authReducer,
  counter: fromCounter.counterReducer,
/*   data: fromDataStorage.dataStorageReducer, */
  suppliers: fromSuppliers.suppliersReducer
};
