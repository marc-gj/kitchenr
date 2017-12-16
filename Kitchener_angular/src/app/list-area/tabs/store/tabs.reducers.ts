import * as fromTabs from './tabs.actions';

export interface State {
  tabs: Array<{id: string, name: string}>;
}

const initialState: State = {
  tabs: []
};

export function tabsReducer(state = initialState, action: fromTabs.TabsActions) {
  switch (action.type) {
    case (fromTabs.NEW_TAB):
    const array = state.tabs;
    let match: number = 0;
    array.forEach((element) => {
      if (element.id === action.payload.id) {
        match++;
      }
    });
    if (match > 0) {
      return state;
    } else {
      return {
        ...state,
        tabs: [...state.tabs, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
