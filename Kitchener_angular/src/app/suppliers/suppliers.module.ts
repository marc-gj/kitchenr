import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { SupplierShellComponent } from './supplier-shell/supplier-shell.component';
import { SuppliersComponent } from './suppliers.component';

@NgModule({
	declarations: [
		SuppliersComponent,
		SupplierListComponent,
		SupplierDetailComponent,
		SupplierShellComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class SuppliersModule {}
