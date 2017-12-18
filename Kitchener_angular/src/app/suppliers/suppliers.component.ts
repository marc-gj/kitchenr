import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Supplier } from './supplier.model';
import * as fromApp from '../store/app.reducers';
import * as fromSuppliers from './store/suppliers.actions';
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
  index: number;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {
   }

  ngOnInit() {
    /* sets up a subscription to activated route.
      uses the id paramater to extract specific supplier for
      use in the component */
    this.sub = this.route.params.subscribe((data) => {
      this.supplierState$ = this.store.select('suppliers').map((array) => {
        const supplier = array.suppliers.find((element) => {
          return element.id === data.id;
        });
        this.index = array.suppliers.indexOf(supplier);
        console.log(this.index);
        return supplier;
      });
    });
  }

  edit() {
    this.store.dispatch(new fromSuppliers.SetEditMode(this.index));
  }

  save(supplier: Supplier) {
    this.store.dispatch(new fromSuppliers.UpdateSupplier({supplier: supplier, index: this.index}));
  }

  cancel() {
    this.store.dispatch(new fromSuppliers.CancelEdit(this.index));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
