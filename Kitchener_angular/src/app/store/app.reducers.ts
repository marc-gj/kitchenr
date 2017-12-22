import { ActionReducerMap } from '@ngrx/store';
import * as fromUsers from '../users/store/users.reducers';
import * as fromAuth from '../users/auth/auth.reducers';
/* import * as fromDataStorage from '../datastorage/datastorage.reducers'; */
import * as fromSuppliers from '../suppliers/store/suppliers.reducers';
import * as fromTabs from '../list-area/tabs/store/tabs.reducers';

export interface AppState {
  users: fromUsers.State;
  auth: fromAuth.State;
/*   data: fromDataStorage.State; */
  suppliers: fromSuppliers.State;
  tabs: fromTabs.State;
}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUsers.usersReducer,
  auth: fromAuth.authReducer,
/*   data: fromDataStorage.dataStorageReducer, */
  suppliers: fromSuppliers.suppliersReducer,
  tabs: fromTabs.tabsReducer
};
