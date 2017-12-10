import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import * as fromListActions from '../list-area/store/list.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  pageData: string;
  state$: Observable<any>;

  constructor(public store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.state$ = this.store.select('data');
  }

  changePage(): void {
    this.state$ = this.store.select('data');
    this.state$.subscribe((data) => {
      this.store.dispatch(new fromListActions.SetListStateToSuppliers(data));
    });
  }

  toggle() {
    this.sidenav.toggle();
  }
}
