import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as dataStorageActions from './datastorage.actions';
import { DataStorageService } from './datastorage.service';
import { Supplier } from '../suppliers/supplier.model';

@Injectable()
export class DataStorageEffects {
  constructor(private actions$: Actions, private dataStorageService: DataStorageService) {}
  @Effect() dataLoad$ = this.actions$
  .ofType(dataStorageActions.LOAD_DATA_FROM_SERVER)
  .switchMap(() => {
    console.log('INSIDE THE DATASTORAGE EFFECT');
    const data = this.dataStorageService.loadDataFromServer();
    return data;
  })
  .map((data) => {
    console.log(data);
    console.log('THIS IS WHAT IM ABOUT TO SET BEFORE ACTION CALL ');
    return {
      type: dataStorageActions.SET_DATA_FROM_SERVER,
      payload: data
    };
  });
}
