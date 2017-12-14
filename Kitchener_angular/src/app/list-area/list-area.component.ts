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
  constructor(public store: Store<fromApp.AppState>, private route: ActivatedRoute) { }
  search: string = '';
  storeVariable: string;
  store$: Observable<any>;
  searchableArray: Array<any> = [];
  filteredArray: Array<{ name: string }> = [];

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.storeVariable = data.page;
    });
    this.store$ = this.store.select(`${this.storeVariable}`);
    this.store$.subscribe((data) => {
      data[`${this.storeVariable}`].sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
      this.searchableArray = [...data[`${this.storeVariable}`]];
      /* console.log(this.searchableArray); */
    });
  }

  clicker() {
  }

  /* Refactor this code to be more reusable */
  arraySearcher(array: Array<{ name: string }>, term: string) {
    const thisArray: Array<{ name: string }> = [];
    if (term.length >= 1) {
      array.forEach((item) => {
        let match = 0;
        for (let i = 0; i < term.length; i++) {
          if (item.name.charAt(i).toLocaleLowerCase() === term.charAt(i).toLocaleLowerCase()) {
            match++;
          }
        }
        if (match === term.length) {
          thisArray.push(item);
        }
      });
    }
    this.filteredArray = [...thisArray];
    console.log(this.filteredArray);
  }
}
