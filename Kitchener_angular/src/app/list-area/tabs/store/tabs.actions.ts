import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromTabs from './tabs.reducers';

export const NEW_TAB = 'NEW_TAB';
export const CLOSE_ACTIVE_TAB = 'CLOSE_ACTIVE_TAB';
export const CLOSE_INACTIVE_TAB = 'CLOSE_INACTIVE_TAB';
export const TRY_CLOSE_TAB = 'TRY_CLOSE_TAB';
export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

export class NewTab implements Action {
  readonly type = NEW_TAB;
  constructor(public payload: {id: string, name: string}) {}
}

export class CloseActiveTab implements Action {
  readonly type = CLOSE_ACTIVE_TAB;
  constructor(public payload: number) {}
}

export class CloseInactiveTab implements Action {
  readonly type = CLOSE_INACTIVE_TAB;
  constructor(public payload: number) {}
}

export class TryCloseTab implements Action {
  readonly type = TRY_CLOSE_TAB;
  constructor(public payload: {index: number, urlSegment: string, tabsState: Observable<fromTabs.State>}) {}
}

export class ChangeActiveTab implements Action {
  readonly type = CHANGE_ACTIVE_TAB;
  constructor(public payload: number) {}
}

export type TabsActions = NewTab | CloseActiveTab | CloseInactiveTab | TryCloseTab | ChangeActiveTab;
