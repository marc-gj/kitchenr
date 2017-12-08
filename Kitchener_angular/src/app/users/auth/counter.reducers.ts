import * as fromCounterActions from './counter.actions';

export interface State {
  counter: number;
  dog: number;
}

const initialState = {
  counter: 0,
  dog: 2
};

export function counterReducer(state: State = initialState , action: fromCounterActions.CounterActions) {
  switch (action.type) {
    case fromCounterActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        dog: state.dog - 1
      };
  case fromCounterActions.DECREMENT:
    return {
      ...state,
      counter: state.counter - 1,
      dog: state.dog + 1,
    };
  default:
    return state;
  }
}
