import { User } from '../user.model';
import * as UserActions from './users.actions';

export interface State {
  user: User;
}

const initialState = {
  user: new User('Marc', 'marc-gj@live.com', 'password')
};

export function usersReducer(state = initialState, action: UserActions.UserActions) {
  switch (action.type) {
    case UserActions.ADD_USER:
      return {
        ...state,
        user: { ...state.user, user: action.payload }
      };
    default:
      return state;
  }
}
