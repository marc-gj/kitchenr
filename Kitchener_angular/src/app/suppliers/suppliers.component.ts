import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Supplier } from './supplier.model';
import * as fromApp from '../store/app.reducers';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit, OnDestroy {

  supplierState$: Observable<Supplier | undefined>;
  sub: Subscription;
  editMode: boolean = false;
  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) { }

  ngOnInit() {
    /* sets up a subscription to activated route.
      uses the id paramater to extract specific supplier for
      use in the component */
    this.sub = this.route.params.subscribe((data) => {
      console.log('Hello' + data);
      this.supplierState$ = this.store.select('suppliers').map((array) => {
        return array.suppliers.find((element) => {
          return element.id === data.id;
        });
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
