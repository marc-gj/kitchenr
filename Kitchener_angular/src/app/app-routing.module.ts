import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { StockComponent } from './stock/stock.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DishesComponent } from './dishes/dishes.component';

const routes: Routes = [
	{ path: 'stock', component: StockComponent },
	{ path: 'suppliers', component: SuppliersComponent },
	{ path: 'ingredients', component: IngredientsComponent },
	{ path: 'recipes', component: RecipesComponent },
	{ path: 'dishes', component: DishesComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {

}
