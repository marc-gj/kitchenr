import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from '../supplier.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sales-rep',
  templateUrl: './sales-rep.component.html',
  styleUrls: ['./sales-rep.component.scss']
})
export class SalesRepComponent implements OnInit {

  @Input() supplier: Supplier;
  @Input() editMode: boolean;

  private salesRepForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.salesRepForm = new FormGroup({
      'firstName': new FormControl(this.supplier.salesReps[0].firstName),
      'lastName': new FormControl(this.supplier.salesReps[0].lastName),
      'email': new FormControl(this.supplier.salesReps[0].contact.email),
      'telephone': new FormControl(this.supplier.salesReps[0].contact.telephone),
      'fax': new FormControl(this.supplier.salesReps[0].contact.fax),
      'cellphone': new FormControl(this.supplier.salesReps[0].contact.cellphone)
    });
  }

}
