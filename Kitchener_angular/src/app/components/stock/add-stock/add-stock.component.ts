import { Component, OnInit } from '@angular/core';
import { StockService } from '../../../services/stock/stock.service';
import { Stock } from '../../../classes/stock';

@Component({
	selector: 'app-add-stock',
	templateUrl: './add-stock.component.html',
	styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

	stockItem: Stock;
	stockTypes: Set<string>;
	unitsOfMeasure: Set<string>;
	storageLocations: Set<string>;
	pricedBy: Set<string>;

	constructor(private stockService: StockService) { }

	ngOnInit() {
		this.populateFormSelectInfo();
	}

	populateFormSelectInfo() {
		this.stockService
			.getStockFormInfo()
			.then(data => {
				this.
			});
	}

	getStock(id) {
		this.stockService.getStockById(id);
	}

}
