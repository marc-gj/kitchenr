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
// GET an Observable of Supplier Arrays from the server
// Returns a single Array of Supplier objects
	getSuppliers(): Observable<Supplier[]> {
		return this.http.get<Supplier[]>(this.apiRoot + this.suppliersUrls.getSuppliers)
			.pipe(
				catchError(this.handleError('getSuppliers', []))
			);
	}

	/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

}

