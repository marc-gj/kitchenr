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
    authenticate: '/authenticate',
    jwtvalidator: '/jwtvalidator'
  };

  private JWT = 'Kitchnr';

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
    localStorage.setItem(this.JWT, payload);
  }

  getJWTFromLocalStorage(): {jwt: string | null} {
    return { jwt: localStorage.getItem(this.JWT) };
  }

  clearJWTFromLocalStorage(): void {
    localStorage.removeItem(this.JWT);
  }

  validateJWT(): boolean {
    if (this.http.get<boolean>(this.apiRoot + this.authUrl.jwtvalidator) === of(true)
  ) { return true; }
  return false;
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
