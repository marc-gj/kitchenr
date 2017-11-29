import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './components/stock/add-stock/add-stock.component';
import { TestComponent } from './components/test/test.component';
import { SupplierComponent } from './components/supplier/supplier.component';

const routes: Routes = [
	/* { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, */
	{ path: 'add-stock', component: AddStockComponent },
	{ path: 'add-supplier', component: SupplierComponent},
	{ path: 'test', component: TestComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
