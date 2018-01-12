import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as fromSupplierActions from './suppliers.actions';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.model';

@Injectable()
export class SupplierEffects {
  constructor(private actions$: Actions, private supplierService: SupplierService) { }
  @Effect() fetchSuppliers$ = this.actions$
    .ofType(fromSupplierActions.FETCH_SUPPLIERS_FROM_SERVER)
    .switchMap(() => {
      return this.supplierService.loadDataFromServer();
    })
    .map((supplierArray: Supplier[]) => {
      return {
        type: fromSupplierActions.SET_SUPPLIERS_FROM_SERVER,
        payload: supplierArray
      };
    });

    @Effect({dispatch: false}) updateSupplier$ = this.actions$
      .ofType(fromSupplierActions.UPDATE_SUPPLIER)
      .take(1)
      .map((payload) => {
        console.log(payload);
      });
}
