import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromListReducers from './store/list.reducers';
import { Observable } from 'rxjs/Observable';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.css']
})
export class ListAreaComponent implements OnInit {
  private listState$: Observable<fromListReducers.State>;
  constructor(public store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.listState$ = this.store.select('list');
  }

}
