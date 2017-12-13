import { Action } from '@ngrx/store';
/* import { Supplier } from '../suppliers/supplier.model'; */

export const LOAD_DATA_FROM_SERVER = 'LOAD_DATA_FROM_SERVER';
/* export const PUSH_DATA_TO_SERVER = 'PUSH_DATA_TO_SERVER';
export const SET_DATA_FROM_SERVER = 'SET_DATA_FROM_SERVER'; */

export class LoadDataFromServer implements Action {
  readonly type = LOAD_DATA_FROM_SERVER;
}

/* export class PushDataToServer implements Action {
  readonly type = PUSH_DATA_TO_SERVER;
  constructor(public payload: {
    suppliers: any[]
  }) {}
} */

/* export class SetDataFromServer implements Action {
  readonly type = SET_DATA_FROM_SERVER;
  constructor(
    public payload: {
    suppliers: Supplier[]
  }) {}
} */

export type DataStorageActions = LoadDataFromServer /* | PushDataToServer | SetDataFromServer */;
