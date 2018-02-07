import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { SuppliersComponent } from './suppliers.component';
import { OfficeComponent } from './office/office.component';
import { FormActionsComponent } from '../shared/form-actions/form-actions.component';
import { SalesRepComponent } from './sales-rep/sales-rep.component';
import { NewSupplierComponent } from './new-supplier/new-supplier.component';

@NgModule({
  declarations: [
    SuppliersComponent,
    OfficeComponent,
    SalesRepComponent,
    FormActionsComponent,
    NewSupplierComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SuppliersModule { }
