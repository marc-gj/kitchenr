import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

interface Test {
  data: string;
}

@Injectable()
export class TestResolver implements Resolve<Test> {
  constructor()
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Test> |
  Promise<Test> | Test {
    return {data: 'I can\'t believe its not butter'};
  }
}
