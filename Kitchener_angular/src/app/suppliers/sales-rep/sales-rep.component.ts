import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../supplier.model';

@Component({
  selector: 'app-sales-rep',
  templateUrl: './sales-rep.component.html',
  styleUrls: ['./sales-rep.component.scss']
})
export class SalesRepComponent implements OnInit {

  @Input() supplier: Supplier;
  @Input() editMode: boolean;

  constructor() { }

  ngOnInit() {
  }

}
