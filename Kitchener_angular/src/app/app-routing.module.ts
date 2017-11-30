import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './components/stock/add-stock/add-stock.component';
import { TestComponent } from './components/test/test.component';
import { SupplierListComponent } from './components/supplier/components/supplier/supplier-list/supplier-list.component';

const routes: Routes = [
	/* { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, */
	{ path: 'add-stock', component: AddStockComponent },
	{ path: 'test', component: TestComponent },
	{ path: 'yaga', component: SupplierListComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
