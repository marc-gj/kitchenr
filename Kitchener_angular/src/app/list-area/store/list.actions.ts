import { Action } from '@ngrx/store';
import { Supplier } from '../../suppliers/supplier.model';

export const SET_LIST_STATE_TO_SUPPLIERS = 'SET_LIST_STATE_TO_SUPPLIERS';

export class SetListStateToSuppliers implements Action {
  readonly type = SET_LIST_STATE_TO_SUPPLIERS;
  constructor(public payload: any[]) {}
}

export type ListAction = SetListStateToSuppliers;
