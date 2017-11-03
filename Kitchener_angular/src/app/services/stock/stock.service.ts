import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
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
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}

}

export class Stock {
	private id: number;
	private name: string;
	private brand: string;
	private price: number;
	private supplier: string;
	private purchasedBy: purchasedBy;
	private itemsPerCase: number;
	private quantityPerItem: number;
	private unitOfMeasure: unitOfMeasure;
	private type: stockType[];
	private minStockLevel: number;
	private maxStockLevel: number;
	private stockParLevel: number;
	private currentStockLevel: number;
	private storageLocation: string;
}

export enum purchasedBy { Case, Unit, Weight, Volume }

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
