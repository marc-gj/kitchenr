import { Action } from '@ngrx/store';

export const CREATE_NEW_USER = 'CREATE_NEW_USER';
export const CHECK_LOCAL_STORAGE_TOKEN = 'CHECK_LOCAL_STORAGE_TOKEN';
export const TRY_SIGN_IN = 'TRY_SIGN_IN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_TOKEN = 'SET_TOKEN';

export class NewUser implements Action {
  readonly type = CREATE_NEW_USER;
}

export class CheckLocalStorageToken implements Action {
  readonly type = CHECK_LOCAL_STORAGE_TOKEN;
  constructor (public payload: {token: string}) {}
}

export class SignIn implements Action {
  readonly type = SIGN_IN;
  constructor(public payload: {email: string, password: string}) {}
}

export class TrySignIn implements Action {
  readonly type = TRY_SIGN_IN;
  constructor(public payload: {email: string, password: string}) {}
}

export class SignInFailed implements Action {
  readonly type = SIGN_IN_FAILED;
  constructor(public payload: {email: string, password: string}) {}
}

export class SignOut implements Action {
  readonly type = SIGN_OUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) {}
}

export type AuthActions =
  NewUser |
  SignIn |
  SignOut |
  SetToken |
  TrySignIn |
  SignInFailed;
