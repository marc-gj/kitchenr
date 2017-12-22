import { Action } from '@ngrx/store';
import { Supplier } from '../supplier.model';

export const FETCH_SUPPLIERS_FROM_SERVER = 'FETCH_SUPPLIERS_FROM_SERVER';
export const SET_SUPPLIERS_FROM_SERVER = 'SET_SUPPLIERS_FROM_SERVER';
export const CREATE_NEW_SUPPLIER = 'CREATE_NEW_SUPPLIER';
export const DESTROY_SUPPLIER = 'DESTROY_SUPPLIER';
export const SET_EDIT_MODE = 'SET_EDIT_MODE';
export const CANCEL_EDIT = 'CANCEL_EDIT';

export class FetchSuppliersFromServer implements Action {
  readonly type = FETCH_SUPPLIERS_FROM_SERVER;
}

export class SetSuppliersFromServer implements Action {
  readonly type = SET_SUPPLIERS_FROM_SERVER;
  constructor(public payload: Supplier[]) { }
}

export class CreateNewSupplier implements Action {
  readonly type = CREATE_NEW_SUPPLIER;
  constructor(public payload: Supplier) { }
}

export class DestroySupplier implements Action {
  readonly type = DESTROY_SUPPLIER;
  constructor(public payload: Supplier) { }
}

export class SetEditMode implements Action {
  readonly type = SET_EDIT_MODE;
  constructor(public payload: string) { }
}

export class CancelEdit implements Action {
  readonly type = CANCEL_EDIT;
  constructor(public payload: string) { }
}


export type SupplierActions =
  FetchSuppliersFromServer |
  SetSuppliersFromServer |
  CreateNewSupplier |
  DestroySupplier |
  SetEditMode |
  CancelEdit;
