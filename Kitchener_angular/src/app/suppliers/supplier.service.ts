import { Injectable } from '@angular/core';
import { SalesRep } from './sales-rep.model';
import { IContact } from '../shared/contact.model';
import { Supplier } from './supplier.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../messages/message.service';


@Injectable()
export class SupplierService {

	private supplierList$: Observable<Supplier[]>;

	private apiRoot = 'http://localhost:8080/suppliers';

	private suppliersUrl = {
		addSupplier: '/newsupplier',
		addSupplierWSR: '/newsupplierwsr',
		getSupplierById: '/getsupplierdetails',
		getSuppliers: '/getallsuppliers',
		deleteSupplier: '/deletesupplier',
		patchSupplier: '/updatesupplier'
	};

	constructor(
		private http: HttpClient,
		private messageService: MessageService) {
	}

	getSuppliers(): Observable<Supplier[]> {
		return this.http
			.get<Supplier[]>(this.apiRoot + this.suppliersUrl.getSuppliers)
				.pipe(
					tap(suppliers => this.log(`fetched suppliers`)),
					catchError(this.handleError('getSuppliers', []))
				);
	}

	getSupplier(id: string): Observable<Supplier> {
		const url = `${this.apiRoot}${this.suppliersUrl.getSupplierById}/${id}`;
		return this.http.get<Supplier>(url)
						.pipe(
							tap(_ => this.log(`fetched suppler id = ${id}`)),
							catchError(this.handleError<Supplier>(`getSupplier id=${id}`))
						);
	}

	private log(message: string): void {
		this.messageService.add('Supplier Service: ' + message);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T> (operation = 'operation', result?: T) {
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
