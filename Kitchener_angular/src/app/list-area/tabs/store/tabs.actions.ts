import { Action } from '@ngrx/store';

export const NEW_TAB = 'NEW_TAB';
export const CLOSE_TAB = 'CLOSE_TAB';

export class NewTab implements Action {
  readonly type = NEW_TAB;
  constructor(public payload: {id: string, name: string}) {}
}

export class CloseTab implements Action {
  readonly type = CLOSE_TAB;
  constructor(public payload: number) {}
}

export type TabsActions = NewTab | CloseTab;
