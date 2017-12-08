import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as AuthActions from './auth.actions';
import { AuthService } from './auth.service';
import { of } from 'rxjs/observable/of';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
  @Effect() authSignIn$ = this.actions$
    .ofType(AuthActions.TRY_SIGN_IN)
    .map((action: AuthActions.TrySignIn) => {
      return action.payload;
    })
    .switchMap((authData: {email: string, password: string}) => {
      return this.authService.signInWithUsernameAndPassword(authData);
    })
    .switchMap((dataFromServer) => {
      if (dataFromServer.success === true) {
        this.authService.storeJWTInLocalStorage(dataFromServer.token);
        this.router.navigate(['/core']);
        return [{type: AuthActions.SIGN_IN}, {type: AuthActions.SET_TOKEN, payload: dataFromServer.token}];
      }
      return of({
        type: AuthActions.SIGN_IN_FAILED
      });
    })
    .catch(() =>  {
      console.log('error');
      return of({
        type: AuthActions.SIGN_IN_FAILED
      });
    }
  );

  @Effect({dispatch: false}) authSignOut$ = this.actions$
  .ofType(AuthActions.SIGN_OUT)
  .map(() => {
    console.log(localStorage);
    this.authService.clearJWTFromLocalStorage();
    this.router.navigate(['/']);
    console.log(localStorage);
  });
  }
