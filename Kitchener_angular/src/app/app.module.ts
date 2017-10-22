import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/core/sidenav/sidenav.component';
import { ToolbarComponent } from './components/core/toolbar/toolbar.component';
import { AddStockComponent } from './components/stock/add-stock/add-stock.component';
import { StockService } from './services/stock/stock.service';
import { StockDetailComponent } from './components/stock/stock-detail/stock-detail.component';
import { StockListComponent } from './components/stock/stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    AddStockComponent,
    StockDetailComponent,
    StockListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdListModule
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
