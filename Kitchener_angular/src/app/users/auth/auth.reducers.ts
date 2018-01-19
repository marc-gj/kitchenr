import * as AuthActions from './auth.actions';

export interface State {
  token: string | null;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions): State {
  switch (action.type) {
    case (AuthActions.CREATE_NEW_USER):
    case (AuthActions.SIGN_IN): {
      return {
        ...state,
        authenticated: true
      };
    }
    case (AuthActions.SIGN_OUT): {
      return {
        ...state,
        authenticated: false,
        token: null
      };
    }
    case (AuthActions.SET_TOKEN): {
      return {
        ...state,
        token: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
