import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-shell',
  templateUrl: './list-shell.component.html',
  styleUrls: ['./list-shell.component.scss']
})
export class ListShellComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
    /* console.log(this.item); */
  }

}
