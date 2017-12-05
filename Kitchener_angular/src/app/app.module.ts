import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { SuppliersModule } from './suppliers/suppliers.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { StockDetailComponent } from './stock/stock-detail/stock-detail.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { MessageComponent } from './messages/message.component';
import { StockService } from './stock/stock.service';
import { SupplierService } from './suppliers/supplier.service';
import { MessageService } from './messages/message.service';
import { StockComponent } from './stock/stock.component';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		ToolbarComponent,
		AddStockComponent,
		StockDetailComponent,
		StockListComponent,
		MessageComponent,
		StockComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		FlexLayoutModule,
		SuppliersModule
	],
	providers: [StockService, SupplierService, MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
