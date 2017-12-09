import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
	selector: 'app-add-stock',
	templateUrl: './add-stock.component.html',
	styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

	constructor(private stockService: StockService) { }

	ngOnInit() {
	}

/* 	getStock(id) {
		this.stockService.getStockById(id);
	} */

}
