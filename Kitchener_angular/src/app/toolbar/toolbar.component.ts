import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuthReducers from '../users/auth/auth.reducers';
import * as AuthActions from '../users/auth/auth.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  authState: Observable<fromAuthReducers.State>;
  @Output() tester: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store<fromApp.AppState>) {
    this.authState = this.store.select('auth');
   }

  ngOnInit() {
  }

  toggleSidenav() {
    this.tester.emit();
  }

  signOut() {
    this.store.dispatch(new AuthActions.SignOut);
  }

}
