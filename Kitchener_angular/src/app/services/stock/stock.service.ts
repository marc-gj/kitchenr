import { Injectable } from '@angular/core';
import { STOCK } from '../../test-data/stock';

@Injectable()
export class StockService {

  constructor() { }

  getStock() {
    console.log(STOCK);
  }

  getStockById(id) {
    console.log(STOCK.find(stock => stock.id === id));
  }

}
