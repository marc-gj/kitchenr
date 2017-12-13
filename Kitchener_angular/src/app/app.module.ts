import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { StockModule } from './stock/stock.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';
import { DishesModule } from './dishes/dishes.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MessageComponent } from './messages/message.component';

import { ListAreaComponent } from './list-area/list-area.component';
import { ListSearchComponent } from './list-area/search/list-search.component';

import { SupplierService } from './suppliers/supplier.service';
import { MessageService } from './messages/message.service';
import { AuthService } from './users/auth/auth.service';
import { reducers } from './store/app.reducers';
import { AuthEffects } from './users/auth/auth.effects';
import { DataStorageEffects } from './datastorage/datastorage.effects';
import { AuthGuard } from './users/auth/auth-guard.service';
import { AuthInterceptor } from './users/auth/auth.interceptor';
import { CoreResolver } from './core/core.resolver';
import { SupplierEffects } from './suppliers/store/suppliers.effects';
import { ListShellComponent } from './list-area/list-shell/list-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    MessageComponent,
    CoreComponent,
    ListAreaComponent,
    ListSearchComponent,
    ListShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UsersModule,
    SuppliersModule,
    StockModule,
    IngredientsModule,
    RecipesModule,
    DishesModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, DataStorageEffects, SupplierEffects])
  ],
  providers: [
    SupplierService,
    MessageService,
    AuthService,
    AuthGuard,
    CoreResolver,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
