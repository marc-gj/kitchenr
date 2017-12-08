import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockComponent } from './stock.component';
import { StockListComponent } from './stock-list/stock-list.component';

@NgModule({
  declarations: [
    StockComponent,
    StockListComponent
  ],
  imports: [CommonModule]
})

export class StockModule { }
