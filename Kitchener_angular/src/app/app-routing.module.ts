import { NgModule } from '@angular/core';
import { AuthGuard } from './users/auth/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { StockComponent } from './stock/stock.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DishesComponent } from './dishes/dishes.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'core', component: CoreComponent, canActivate: [AuthGuard], children: [
      { path: 'stock', component: StockComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'ingredients', component: IngredientsComponent },
      { path: 'recipes', component: RecipesComponent },
      { path: 'dishes', component: DishesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
