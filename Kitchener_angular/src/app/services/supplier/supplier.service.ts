import { Injectable } from '@angular/core';
import { SalesRep } from '../../classes/sales-rep';
import { IContact } from '../../classes/Icontact';
import { Supplier } from '../../classes/supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';


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

	constructor(private messageService: MessageService) {
	}

	populateSuppliersArray(): void {
		this.testData.forEach(element => {
			this.suppliers.push(new Supplier(element.name, element.address));
		});
	}

	getSuppliers(): Observable<Supplier[]> {
		// Todo: send the message -after- fetching the suppliers
		this.messageService.add('SupplierService: Fetched suppliers');
		this.testData.forEach(element => {
			this.suppliers.push(new Supplier(element.name, element.address));
		});
		return of(this.suppliers);
	}

}

