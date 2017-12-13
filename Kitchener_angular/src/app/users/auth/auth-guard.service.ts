import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/take';

import * as fromApp from '../../store/app.reducers';
import * as fromAuthReducers from './auth.reducers';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    return this.store.select('auth')
    .take(1)
    .map((authState: fromAuthReducers.State) => {
      if (authState.authenticated === false) {
        this.router.navigate(['/sign-in']);
      }
      return authState.authenticated;
    });
  }
}
