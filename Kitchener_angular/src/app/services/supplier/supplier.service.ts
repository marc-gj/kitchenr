import { Injectable } from '@angular/core';
import { SalesRep } from '../sales-rep/sales-rep.service';
import { IContact } from '../../classes/Icontact';
import { Supplier } from '../../classes/supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class SupplierService {

	private apiRoot = 'http://localhost/suppliers';

	private suppliersUrls = {
		addSupplier: '/newsupplier',
		getSupplierById: '/getsupplierdetails',
		getSuppliers: '/getallsuppliers',
		deleteSupplier: '/deletesupplier',
		patchSupplier: '/updatesupplier'
	};

	constructor(private http: HttpClient) {

	}

	getSuppliers (): Observable<Supplier[]> {
		return this.http.get<Supplier[]>(this.apiRoot + this.suppliersUrls.getSuppliers)
			.pipe(
				catchError(this.handleError('getSuppliers', []))
			);
	}

}
