import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SuppliersComponent } from './suppliers.component';

@NgModule({
	declarations: [
		SuppliersComponent,
		SupplierListComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule
	]
})
export class SuppliersModule {}
