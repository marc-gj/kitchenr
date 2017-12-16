import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() tab: { id: string, name: string };
  hover: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigate(id: string) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }

}
