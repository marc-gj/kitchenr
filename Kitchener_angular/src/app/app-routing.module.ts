import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { SupplierListComponent } from './suppliers/supplier-list/supplier-list.component';

const routes: Routes = [
	{ path: 'add-stock', component: AddStockComponent },
	{ path: 'suppliers', component: SupplierListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
