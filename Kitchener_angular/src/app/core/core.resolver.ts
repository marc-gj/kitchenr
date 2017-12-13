import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromDataStorageActions from '../datastorage/datastorage.actions';

interface Core {
  data: string;
}

@Injectable()
export class CoreResolver implements Resolve<Core> {
  constructor(private store: Store<fromApp.AppState>) { }
  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<Core> |
    Promise<Core> | Core {
    this.store.dispatch(new fromDataStorageActions.LoadDataFromServer());
    return { data: 'I can\'t believe its not butter' };
  }
}
