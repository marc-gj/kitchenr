import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTabs from './store/tabs.reducers';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabsState$: Observable<Array<{id: string, name: string}>>;

  constructor(private store: Store<fromTabs.State>) { }

  ngOnInit() {
    this.tabsState$ = this.store.select('tabs');
  }



  /*
  closeTab(item: Supplier) {
    this.openTabs = this.removeFromOpenTabsArray(this.openTabs, item);
    if (this.openTabs[0]) {
      this.router.navigateByUrl(`/core/${this.storeVariable}/${this.openTabs[0].id}` );
    } else {
      this.router.navigateByUrl(`/core/${this.storeVariable}`);
    }
  }

  removeFromOpenTabsArray(originalArray: Supplier[], item: Supplier): Supplier[] {
    const array: Supplier[] = originalArray;
    let index: number;
    index = array.findIndex((element) => {
      return element.id === item.id;
    });
    array.splice(index, 1);
    console.log('Array spliced, ' + array);
    return array;
  } */

}
