import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const ADD_USER = 'ADD_USER';

export class AddUser implements Action {
  readonly type = ADD_USER;
  payload: User;
}

export type UserActions = AddUser;

