import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Supplier } from './supplier.model';
import * as fromTabs from '../list-area/tabs/store/tabs.actions';
import * as fromApp from '../store/app.reducers';
import * as fromSuppliers from './store/suppliers.actions';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { OfficeEdit } from './office/office.component';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit, OnDestroy {

  supplierState$: Observable<Supplier | undefined>;
  supplierEditState$: Observable<OfficeEdit>;
  sub: Subscription;
  index: number;

  constructor(private store: Store<fromApp.AppState>, private route: ActivatedRoute) {
   }

  ngOnInit() {
    /* sets up a subscription to activated route.
      uses the id paramater to extract specific supplier for
      use in the component */
    this.sub = this.route.params.subscribe((data) => {
      this.supplierState$ = this.store.select('suppliers').map((state) => {
        const supplier: Supplier = state.suppliers.find(element => element.id === data.id);
        const index: number = state.suppliers.indexOf(supplier);
        this.index = index;
        return supplier;
      });
      this.supplierEditState$ = this.store.select('suppliers').map((state) => {
        const supplierEdit: OfficeEdit = state.suppliersEdit.find(element => element.id === data.id);
        return supplierEdit;
      });
    });
  }

  edit(supplierEdit: OfficeEdit) {
    this.store.dispatch(new fromTabs.NewTab({name: supplierEdit.name, id: supplierEdit.id}));
    this.store.dispatch(new fromSuppliers.SetEditMode(supplierEdit));
  }

  updateEditingSupplier(supplierEdit: OfficeEdit) {
    this.store.dispatch(new fromSuppliers.UpdateSupplierEdit(supplierEdit));
  }

  save(form: any) {
    console.log(form);
  }

  cancel(id: string) {
    this.store.dispatch(new fromSuppliers.CancelEdit(id));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
