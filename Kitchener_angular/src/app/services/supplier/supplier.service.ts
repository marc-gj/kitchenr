import { Injectable } from '@angular/core';
import { SalesRep } from '../../classes/sales-rep';
import { IContact } from '../../classes/Icontact';
import { Supplier } from '../../classes/supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class SupplierService {

	testData = [{
		name: 'Hadco',
		address: '4 Palm'
	},
	{
		name: 'Malabar',
		address: 'Maraval Yea'
	}];

	public suppliers: Supplier[] = [];

	private apiRoot = 'http://localhost/suppliers';

	private suppliersUrls = {
		addSupplier: '/newsupplier',
		getSupplierById: '/getsupplierdetails',
		getSuppliers: '/getallsuppliers',
		deleteSupplier: '/deletesupplier',
		patchSupplier: '/updatesupplier'
	};

	constructor() {
		this.populateSuppliersArray();
	}

	populateSuppliersArray(): void {
		this.testData.forEach(element => {
			this.suppliers.push(new Supplier(element.name, element.address));
		});
	}

	getSuppliers(): Observable<Supplier[]> {
		return of(this.suppliers);
	}

}

