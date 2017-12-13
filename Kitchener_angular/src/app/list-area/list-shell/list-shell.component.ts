import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../../suppliers/supplier.model';

@Component({
  selector: 'app-list-shell',
  templateUrl: './list-shell.component.html',
  styleUrls: ['./list-shell.component.scss']
})
export class ListShellComponent implements OnInit {

  @Input() supplier: Supplier;

  constructor() { }

  ngOnInit() {
  }

}
