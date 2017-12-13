import { NgModule } from '@angular/core';
import { AuthGuard } from './users/auth/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DishesComponent } from './dishes/dishes.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { CoreComponent } from './core/core.component';
import { ListAreaComponent } from './list-area/list-area.component';
import { CoreResolver } from './core/core.resolver';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'core', component: CoreComponent, resolve: {core: CoreResolver}, canActivate: [AuthGuard], children: [
      { path: 'stock', component: ListAreaComponent, data: {page: 'stock'}, children: [
        { path: ':id', component: StockComponent }
      ] },
      { path: 'suppliers', component: ListAreaComponent, data: {page: 'suppliers'}, children: [
        /* { path: ':id', component: SuppliersComponent } */
      ]},
      { path: 'ingredients', component: ListAreaComponent, data: {page: 'ingredients'} , children: [
        { path: ':id', component: IngredientsComponent }
      ]},
      { path: 'recipes', component: ListAreaComponent, data: {page: 'recipes'}, children: [
        { path: ':id', component: RecipesComponent }
      ]},
      { path: 'dishes', component: ListAreaComponent, data: {page: 'dishes'}, children: [
        { path: ':id', component: DishesComponent }
      ]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
