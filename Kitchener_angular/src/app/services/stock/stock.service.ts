import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Stock, purchasedBy, unitOfMeasure, stockType } from '../../classes/stock';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StockService {

	id: number;
	name: string;
	brand: string;
	price: number;
	supplier: string;
	purchasedBy: purchasedBy;
	itemsPerCase: number;
	quantityPerItem: number;
	unitOfMeasure: unitOfMeasure;
	type: stockType[];

	private apiRoot: string = 'http://localhost:8080/stocks';

	constructor(private http: Http) { }

	getStock() {
		console.log('STOCK');
	}

	getStockById(id) {
		console.log('STOCK BY ID');
	}

	getStockFormInfo(): Promise<Set<string>> {
		console.log('Fetched information for stock forms');
		const url = `${this.apiRoot}/getstockforminfo`;
		return this.http.get(url)
			.toPromise()
			.then(res => res.json() as Set<string>)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
