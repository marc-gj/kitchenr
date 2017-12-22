import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Supplier } from '../supplier.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit, OnChanges {

  @Input() supplier: Supplier;
  @Input() index: number;
  @Output() update = new EventEmitter<Supplier>();
  @Output() edit = new EventEmitter<Supplier>();
  @Output() save = new EventEmitter<Supplier>();
  @Output() cancel = new EventEmitter<string>();

  private officeForm: FormGroup;
  private editingOffice: [{id: string, address: string, telephone: number | null, fax: number | null, email: string[]}];

  constructor() {
    this.officeForm = new FormGroup({
      'address': new FormControl(null , [Validators.required]),
      'telephone': new FormControl(null, [Validators.required]),
      'fax': new FormControl(null),
      'email': new FormControl(null, [Validators.required])
    });
    this.officeForm.disable();
  }

  ngOnInit() {
    this.editingOffice = [{
      id: this.supplier.id,
      address: this.supplier.contact.address,
      telephone: this.supplier.contact.telephone ? this.supplier.contact.telephone[0] : null,
      fax: this.supplier.contact.fax ? this.supplier.contact.fax[0] : null,
      email: this.supplier.contact.email
    }];
  }

  ngOnChanges() {
    console.log('hi from onchanges');
    this.setForm();
  }

  updateEditingSupplier() {

  }

  onEdit() {
    this.edit.emit(this.supplier);
    this.editingOffice[this.index] = {
      id: this.supplier.id,
      address: this.supplier.contact.address,
      telephone: this.supplier.contact.telephone ? this.supplier.contact.telephone[0] : null,
      fax: this.supplier.contact.fax ? this.supplier.contact.fax[0] : null,
      email: this.supplier.contact.email
    };
    this.setForm();
  }

  onSave() {
    console.log(this.officeForm.value);
    this.save.emit(this.officeForm.value);
  }

  onCancel() {
    this.cancel.emit(this.supplier.id);
    this.setForm();
  }

  setForm() {
    if (!this.supplier.state.editMode) {
      this.officeForm.disable();
      if (this.supplier.contact.address) {
        this.officeForm.patchValue({address: this.supplier.contact.address});
      }
      if (this.supplier.contact.telephone) {
        this.officeForm.patchValue({telephone: this.supplier.contact.telephone[0]});
      }
      if (this.supplier.contact.fax) {
        this.officeForm.patchValue({fax: this.supplier.contact.fax[0]});
      }
      if (this.supplier.contact.email) {
        this.officeForm.patchValue({email: this.supplier.contact.email});
      }
    } else {
      this.officeForm.enable();
      const localEditingOffice = this.editingOffice.find(element => element.id === this.supplier.id);
        this.officeForm.patchValue({address: localEditingOffice.address});
        this.officeForm.patchValue({telephone: localEditingOffice.telephone});
        this.officeForm.patchValue({fax: localEditingOffice.fax});
        this.officeForm.patchValue({email: localEditingOffice.email});
    }
  }
}
