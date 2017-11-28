import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatListModule,
	MatInputModule,
	MatCardModule,
	MatGridListModule,
	MatSelectModule,
	MatAutocompleteModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import { ToolbarComponent } from './components/core/toolbar/toolbar.component';
import { AddStockComponent } from './components/stock/add-stock/add-stock.component';
import { StockDetailComponent } from './components/stock/stock-detail/stock-detail.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';
import { HttpModule } from '@angular/http';
import { TestComponent } from './components/test/test.component';
import { SupplierComponent } from './components/supplier/supplier.component';

import { StockService } from './services/stock/stock.service';
import { SupplierService } from './services/supplier/supplier.service';
import { MessageService } from './services/message/message.service';

@NgModule({
	declarations: [
		AppComponent,
		SidenavComponent,
		ToolbarComponent,
		AddStockComponent,
		StockDetailComponent,
		StockListComponent,
		TestComponent,
		SupplierComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpModule,
		FlexLayoutModule,
		MatSidenavModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		MatListModule,
		MatInputModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule,
		MatAutocompleteModule
	],
	providers: [StockService, SupplierService, MessageService],
	bootstrap: [AppComponent]
})
export class AppModule { }
