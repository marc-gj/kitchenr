import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class StockService {

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
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}

}

export class Stock {
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
}

export enum purchasedBy {
	case = 'case',
	weight = 'weight',
	volume = 'volume',
	unit = 'unit'
}

export enum unitOfMeasure {
	gram = 'g',
	kilogram = 'kg',
	ounce = 'oz',
	pound = 'lb',
	mililitre = 'ml',
	litre = 'l',
	teaspoon = 'tsp',
	tablespoon = 'tbsp',
	flOunce = 'fl.oz',
	cup = 'cup',
	unit = 'unit'
}

export enum stockType {
	dry = 'Dry good',
	frozen = 'Frozen',
	fresh = 'Fresh produce',
	poultry = 'Poultry',
	fish = 'Fish',
	shellFish = 'Shell fish',
	beef = 'Beef',
	pork = 'Pork',
	lamb = 'Lamb',
	condiment = 'Condiment',
	oil = 'Oil',
	sauce = 'Sauce',
	dairy = 'Dairy',
	seasoning = 'Seasoning',
	fruit = 'Fruit',
	vegetable = 'Vegetable',
	pasta = 'Pasta',
	sushi = 'Sushi'
}
