import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Supplier } from '../supplier.model';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {

  @Input() supplier: Supplier;
  @Input() index: number;
  @Output() edit = new EventEmitter();
  @Output() save = new EventEmitter<Supplier>();
  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit();
  }

  onSave() {
    this.save.emit(this.supplier);
  }

  onCancel() {
    this.cancel.emit();
  }
}
