import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as dataStorageActions from './datastorage.actions';
import * as fromSuppliersActions from '../suppliers/store/suppliers.actions';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class DataStorageEffects {
  constructor(private actions$: Actions) { }
  @Effect() dataLoad$ = this.actions$
    .ofType(dataStorageActions.LOAD_DATA_FROM_SERVER)
    .map(() => {
      return {
        type: fromSuppliersActions.FETCH_SUPPLIERS_FROM_SERVER
      };
    });
}
