import { HttpClient } from '@angular/common/http';
import { MessageService } from '../../messages/message.service';
import 'rxjs/add/operator/switchmap';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private apiRoot = 'http://localhost:8080/users';

  private authUrl = {
    authenticate: '/authenticate'
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  signInWithUsernameAndPassword(payload: {email: string, password: string}): Observable<{
    success: boolean,
    token: string,
    user: {
      id: string,
      name: string,
      username: string,
      email: string
  }}> {
    return this.http.post<Observable<{
      success: boolean,
      token: string,
      user: {
        id: string,
        name: string,
        username: string,
        email: string
    }}>>(this.apiRoot + this.authUrl.authenticate, payload)
    .pipe(
      tap(res => console.log(res)),
      catchError(this.handleError<any>(`signInWithUsernameAndPassword`))
    );
  }

  storeJWTInLocalStorage(payload: string): void {
    localStorage.setItem('Kitchnr', payload);
  }

  clearJWTFromLocalStorage(): void {
    localStorage.removeItem('Kitchnr');
  }

  /* getSuppliers(): Observable<Supplier[]> {
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
  } */

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
