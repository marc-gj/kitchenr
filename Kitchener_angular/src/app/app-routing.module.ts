import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStockComponent } from './components/stock/add-stock/add-stock.component';

const routes: Routes = [
	/* { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, */
	{ path: 'add-stock', component: AddStockComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
