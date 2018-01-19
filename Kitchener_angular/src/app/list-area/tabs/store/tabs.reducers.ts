import * as fromTabs from './tabs.actions';

export interface State {
  tabs: Array<{id: string, name: string}>;
  activeTab: number;
  tempTab: {id: string, name: string} | null;
}

const initialState: State = {
  tabs: [],
  activeTab: 0,
  tempTab: null
};

export function tabsReducer(state = initialState, action: fromTabs.TabsActions) {
  switch (action.type) {
    /* First we need to check that the tab does not exist in the tabs array. */
    case (fromTabs.NEW_TEMP_TAB): {
      const array = state.tabs;
      let match: number = 0;
      let matchIndex: number = -1;
      array.forEach((element) => {
        if (element.id === action.payload.id) {
          match++;
          array.indexOf(element);
          matchIndex = array.indexOf(element);
        }
      });
      /* If it exists in the array then we return state otherwise set tempTab to the payload */
      if (match > 0) {
        return {...state, activeTab: matchIndex};
      } else {
        return {
          ...state,
          tempTab: action.payload,
          activeTab: -1
        };
      }
    }
    /* We need to compare the tabs in the state to the payload to make sure
    we don't add duplicate tabs to the tab bar. */
    case (fromTabs.NEW_TAB): {
      const array = state.tabs;
      let match = 0;
      let matchIndex = -1;
      array.forEach((element) => {
        if (element.id === action.payload.id) {
          match++;
          matchIndex = array.indexOf(element);
        }
      });
      /* If we tried to open a tab that from the list-area and it's already open, then we
      make that the active tab */
      if (match > 0) {
        return {
          ...state,
          activeTab: matchIndex
        };
      } else {
        /* When we create a new tab, we want to set that tab as the active tab. */
        return {
          ...state,
          tabs: [...state.tabs, action.payload],
          activeTab: state.tabs.length,
          tempTab: null
        };
      }
    }
    case (fromTabs.CLOSE_TEMP_TAB): {
      return {
        ...state,
        activeTab: state.tabs.length - 1,
        tempTab: null
      };
    }
    /* When closing an active tab we want to change the active tab to one directly before
    in the array.
    If we are closing the first tab then we want to keep the active tab as the first element. */
    case (fromTabs.CLOSE_ACTIVE_TAB): {
      const array = state.tabs;
      array.splice(action.payload, 1);
      return {
        ...state,
        tabs: [...array],
        activeTab: action.payload === 0 ? action.payload : action.payload - 1
      };
    }
    /* When we close an inactive tab that is lower than the currently active tab we want to
    change the active tab to one lower because the active tab in the array will be one lower
    after it is spliced out of the array. */
    case (fromTabs.CLOSE_INACTIVE_TAB): {
      const array = state.tabs;
      array.splice(action.payload, 1);
      return {
        ...state,
        tabs: [...array],
        activeTab: action.payload < state.activeTab ? state.activeTab - 1 : state.activeTab
      };
    }
    case (fromTabs.CHANGE_ACTIVE_TAB): {
      console.log(action.payload);
      return {
        ...state,
        activeTab: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
