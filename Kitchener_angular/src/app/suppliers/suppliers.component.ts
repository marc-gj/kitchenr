import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  private state$: Observable<any>;
  constructor(public store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.state$ = this.store.select('data');
  }

}
