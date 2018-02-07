import { Injectable } from '@angular/core';
import { Supplier } from './supplier.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from '../messages/message.service';
import * as serverSettings from '../shared/server.settings';
import { Contact } from '../shared/contact.model';
import { SalesRep } from './sales-rep.model';


@Injectable()
export class SupplierService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) {
  }

  loadDataFromServer(): Observable<Supplier[]> {
    return this.httpClient.get<[{
      name: string,
      _id: string,
      contact: Contact,
      salesReps: [{
        _id: string,
        firstName: string,
        lastName: string,
        contact: Contact
      }]
    }]>(serverSettings.API_ROOT + serverSettings.GET_ALL_SUPPLIERS_FRAGMENT)
    .map((suppliersAPI) => {
      const supplierArray: Supplier[] = suppliersAPI.map((supplierAPI) => {
        let salesRep: SalesRep;
        if (supplierAPI.salesReps[0]) {
          salesRep = SalesRep.make(supplierAPI.salesReps[0]);
        } else {
          salesRep = SalesRep.default();
        }
        const supplier = {...supplierAPI, salesReps: [salesRep]};
        console.log(Supplier.make(supplier));
        return Supplier.make(supplier);
      });
      return supplierArray;
    })
    .pipe(
      tap(res => console.log(res),
      catchError(this.handleError<any>(`loadDataFromServer`))
    ));
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

