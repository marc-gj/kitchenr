import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as fromAuthReducers from './auth.reducers';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth')
    .take(1)
    .switchMap((authState: fromAuthReducers.State) => {
      if (authState.token !== null) {
        const copiedRequest = req.clone( {headers: req.headers.append('Authorization', <string>authState.token)} );
        return next.handle(copiedRequest);
      }
      return next.handle(req);
    });
  }
}
