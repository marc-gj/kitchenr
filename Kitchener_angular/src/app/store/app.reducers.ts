import { ActionReducerMap } from '@ngrx/store';
import * as fromUsers from '../users/store/users.reducers';
import * as fromAuth from '../users/auth/auth.reducers';
import * as fromCounter from '../users/auth/counter.reducers';
import * as fromDataStorage from '../datastorage/datastorage.reducers';
import * as fromList from '../list-area/store/list.reducers';

export interface AppState {
  users: fromUsers.State;
  auth: fromAuth.State;
  counter: fromCounter.State;
  data: fromDataStorage.State;
  list: fromList.State;

}

export const reducers: ActionReducerMap<AppState> = {
  users: fromUsers.usersReducer,
  auth: fromAuth.authReducer,
  counter: fromCounter.counterReducer,
  data: fromDataStorage.dataStorageReducer,
  list: fromList.listReducer
};
