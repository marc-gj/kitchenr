import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Supplier } from './supplier.model';
import * as fromTabs from '../list-area/tabs/store/tabs.actions';
import * as fromApp from '../store/app.reducers';
import * as fromSuppliers from './store/suppliers.actions';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OfficeForm } from './office/office.component';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit, OnDestroy {

  supplierState$: Observable<Supplier | undefined>;
  supplierEditState$: Observable<OfficeForm | undefined>;
  sub: Subscription;
  index: number;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {
   }

  ngOnInit() {
    /* sets up a subscription to activated route.
      uses the id parameter to extract specific supplier for
      use in the component */
    this.sub = this.route.params.subscribe((data) => {
      this.supplierState$ = this.store.select('suppliers').map((state) => {
        const supplier: Supplier | undefined = state.suppliers.find(element => element.id === data.id);
        if (typeof supplier === 'undefined') {
          return supplier;
        }
        const index: number = state.suppliers.indexOf(supplier);
        this.index = index;
        return supplier;
      });
      this.supplierEditState$ = this.store.select('suppliers').map((state) => {
        const supplierEdit: OfficeForm | undefined = state.suppliersEdit.find(element => element.id === data.id);
        if (typeof supplierEdit === 'undefined') {
          return supplierEdit;
        }
        return supplierEdit;
      });
    });
  }

  edit(supplierEdit: OfficeForm) {
    this.store.dispatch(new fromTabs.NewTab({name: supplierEdit.name, id: supplierEdit.id}));
    this.store.dispatch(new fromSuppliers.SetEditMode(supplierEdit));
  }

  updateEditingSupplier(supplierEdit: OfficeForm) {
    this.store.dispatch(new fromSuppliers.UpdateSupplierEdit(supplierEdit));
  }

  save(supplier: Supplier) {
    this.store.dispatch(new fromSuppliers.UpdateSupplier(supplier));
  }

  cancel(id: string) {
    this.store.dispatch(new fromSuppliers.CancelEdit(id));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
