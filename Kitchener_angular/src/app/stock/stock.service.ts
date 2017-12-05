import { Injectable } from '@angular/core';
/* import { Headers, Http } from '@angular/http'; */
import { Stock, purchasedBy, unitOfMeasure, stockType } from './stock.model';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StockService {

	private apiRoot: string = 'http://localhost:8080/stocks';

	constructor() { }

	/* getStock() {
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
 */
}
