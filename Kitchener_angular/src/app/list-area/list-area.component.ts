import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Supplier } from '../suppliers/supplier.model';
import { Subscription } from 'rxjs/Subscription';
import * as fromTabs from './tabs/store/tabs.actions';
import { UrlSegment } from '../shared/urlSegments';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.scss']
})
export class ListAreaComponent implements OnInit, OnDestroy {
  constructor(
    public store: Store<fromApp.AppState>,
    private route: ActivatedRoute
  ) {}
  search: string = '';
  routeDataSub: Subscription;
  urlSegment: UrlSegment; // obtained from the route data;
  store$: Observable<any>;
  storeSub: Subscription;
  searchableArray: Supplier[] = [];
  filteredArray: Supplier[] = [];

  ngOnInit() {
    this.routeDataSub = this.route.data.subscribe(data => {
      this.urlSegment = data.page;
      console.log(this.urlSegment);
    });
    this.store$ = this.store.select(this.urlSegment);
    /* set up subscription to store observable
      puts items into alphabetical order
      populates an array that can be searched with indexof*
      refactor this code to not use an array */
    this.storeSub = this.store$.subscribe(data => {
      data[`${this.urlSegment}`].sort(
        (a: any, b: any) => (a.name > b.name ? 1 : -1)
      );
      this.searchableArray = [...data[`${this.urlSegment}`]];
    });
  }

  openTempTab(name: string, id: string): void {
    this.store.dispatch(new fromTabs.NewTempTab({ name, id }));
  }

  openTab(name: string, id: string): void {
    this.store.dispatch(new fromTabs.NewTab({ name, id }));
  }

  /* Refactor this code to be more reusable */
  arraySearcher(array: Supplier[], term: string): void {
    const thisArray: Supplier[] = [];
    if (term.length >= 1) {
      array.forEach(item => {
        const match = Supplier.searchArray(item).includes(term.toLocaleLowerCase());
        if (match === true) {
          thisArray.push(item);
        }
      });
    }
    this.filteredArray = [...thisArray];
  }

  ngOnDestroy() {
    this.routeDataSub.unsubscribe();
    this.storeSub.unsubscribe();
  }
}
