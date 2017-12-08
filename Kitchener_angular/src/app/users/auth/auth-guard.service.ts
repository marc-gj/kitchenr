import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as fromAuthReducers from './auth.reducers';

@Injectable()
export class AuthGuard implements CanAcitvate {
  constructor(private store: Store<fromApp.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth')
    .take(1)
    .map((authState: fromAuthReducers.State) => {
      return authState.authenticated;
    });
  }
}
