import { User } from '../user.model';
import * as UserActions from './users.actions';

export interface State {
  users: User[];
}

const initialState: State = {users: [User.make({username: 'Marc', email: 'marc-gj@live.com', password: 'password'})]};

export function usersReducer(state = initialState, action: UserActions.UserActions): State {
  switch (action.type) {
    case UserActions.ADD_USER:
      return {...state, users: [action.payload]};
    default:
      return state;
  }
}
