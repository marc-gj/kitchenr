import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTabs from './store/tabs.reducers';
import * as fromApp from '../../store/app.reducers';

import * as fromTabsActions from './store/tabs.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() urlSegment: string;

  tabsState$: Observable<fromTabs.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.tabsState$ = this.store.select('tabs');
  }

  changeTab(index: number) {
    this.store.dispatch(new fromTabsActions.ChangeActiveTab(index));
  }

  closeTab(index: number) {
    this.store.dispatch(new fromTabsActions.TryCloseTab({index: index, urlSegment: this.urlSegment, tabsState: this.tabsState$}));
  }

}
