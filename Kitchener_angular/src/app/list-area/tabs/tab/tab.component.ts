import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tab: { id: string, name: string };
  @Input() index: number;
  @Input() activeTab: number;
  @Output() closeTab = new EventEmitter<number>();
  @Output() changeTab = new EventEmitter<number>();

  hover: boolean = false;
  hoverX: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigate(id: string, index: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
    this.changeTab.emit(index);
  }

  onCloseTab(index: number) {
    this.closeTab.emit(index);
  }

}
