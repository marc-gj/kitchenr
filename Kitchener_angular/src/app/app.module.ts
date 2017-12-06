import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SuppliersModule } from './suppliers/suppliers.module';
import { StockModule } from './stock/stock.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipesModule } from './recipes/recipes.module';
import { DishesModule } from './dishes/dishes.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MessageComponent } from './messages/message.component';

import { StockService } from './stock/stock.service';
import { SupplierService } from './suppliers/supplier.service';
import { MessageService } from './messages/message.service';
import { ListAreaComponent } from './list-area/list-area.component';
import { ListSearchComponent } from './list-area/search/list-search.component';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		ToolbarComponent,
		MessageComponent,
		ListAreaComponent,
		ListSearchComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		FlexLayoutModule,
		SuppliersModule,
		StockModule,
		IngredientsModule,
		RecipesModule,
		DishesModule
	],
	providers: [StockService, SupplierService, MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
