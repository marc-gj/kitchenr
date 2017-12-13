import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-list-area',
  templateUrl: './list-area.component.html',
  styleUrls: ['./list-area.component.scss']
})
export class ListAreaComponent implements OnInit {
  constructor(public store: Store<fromApp.AppState>, private route: ActivatedRoute) {}

  storeVariable: string;
  store$: Observable<any>;

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.storeVariable = data.page;
    });
    this.store$ = this.store.select(`${this.storeVariable}`);
    this.store$.subscribe((data) => {
      console.log(data.suppliers);
    });
  }

  clicker() {
  }

}
