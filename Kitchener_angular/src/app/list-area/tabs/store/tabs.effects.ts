import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as TabsActions from './tabs.actions';
import 'rxjs/add/operator/map';

@Injectable()
export class TabsEffects {
  constructor(private action$: Actions, private router: Router) { }
  @Effect() TryCloseTabEffect$ = this.action$
    .ofType(TabsActions.TRY_CLOSE_TAB)
    .map((action: TabsActions.TryCloseTab) => {
      let actionToDispatch;

      /* REFACTOR INTO SWITCH STATEMENT */

      action.payload.tabsState.take(1).subscribe((tabs) => {
        /* If we try to close the only tab, we want to navigate away from any specific items. */
        if (action.payload.index === -1) {
          if (tabs.tabs.length >= 1) {
            this.router.navigateByUrl(`/core/${action.payload.urlSegment}/${tabs.tabs[tabs.tabs.length - 1].id}`);
          } else {
            this.router.navigateByUrl(`/core/${action.payload.urlSegment}`);
          }
          actionToDispatch = {
            type: TabsActions.CLOSE_TEMP_TAB
        };
        } else {
          if (tabs.tabs.length === 1 && tabs.tempTab === null) {
            this.router.navigateByUrl(`/core/${action.payload.urlSegment}`);
            actionToDispatch = {
              type: TabsActions.CLOSE_ACTIVE_TAB,
              payload: action.payload.index
            };
          } else {
            if (tabs.tabs.length === 1 && tabs.tempTab !== null) {
              this.router.navigateByUrl(`/core/${action.payload.urlSegment}/${tabs.tempTab.id}`);
              actionToDispatch = {
                type: TabsActions.CLOSE_ACTIVE_TAB,
                payload: action.payload.index
              };
            } else {
              /* If the tab we want to close is currently active, then we need to check the position in the array to
              redirect accordingly.
              If it is the first element in the the array we need to navigate to the next item.
              If its higher than the first element then we want to navigate to the previous element */
              if (action.payload.index === tabs.activeTab) {
                if (action.payload.index === 0) {
                  this.router.navigateByUrl(`/core/${action.payload.urlSegment}/${tabs.tabs[action.payload.index + 1].id}`);
                } else {
                  this.router.navigateByUrl(`/core/${action.payload.urlSegment}/${tabs.tabs[action.payload.index - 1].id}`);
                }
                actionToDispatch = {
                  type: TabsActions.CLOSE_ACTIVE_TAB,
                  payload: action.payload.index
                };

                /* If we want to close a tab that isn't currently focused/active then we just dispatch the action without
                any navigation */
              } else if (action.payload.index !== tabs.activeTab) {
                actionToDispatch = {
                  type: TabsActions.CLOSE_INACTIVE_TAB,
                  payload: action.payload.index
                };
              }
            }
          }
        }
      });
      return actionToDispatch;
    });
}
