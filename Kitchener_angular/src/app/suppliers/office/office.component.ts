import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Supplier } from '../supplier.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';


// change all instances of officeform back to the supplier model as class instances are no longer utilized.
export interface OfficeForm {
  id: string;
  name: string;
  telephone: number[];
  fax: number[];
  email: string;
  address: string;
}
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit, OnChanges {
  @Input() supplier: Supplier;
  @Input() index: number;
  @Input() supplierEdit: OfficeForm;
  @Output() update = new EventEmitter<OfficeForm>();
  @Output() edit = new EventEmitter<OfficeForm>();
  @Output() save = new EventEmitter<Supplier>();
  @Output() cancel = new EventEmitter<string>();
  protected officeForm: FormGroup;
  constructor() {
    this.officeForm = new FormGroup({
      'address': new FormControl(null, [Validators.required]),
      'telephone': new FormControl([null], [Validators.required]),
      'fax': new FormControl([null]),
      'email': new FormControl(null, [Validators.required])
    });
    this.officeForm.disable();
  }
  ngOnInit() {
    if (this.supplierEdit === undefined) {
      this.supplierEdit = this.officeForm.value;
    }
  }
  ngOnChanges() {
    this.setForm();
  }
  /* look into optimizing by sending only what has changed instead of the entire form */
  updateEditingSupplier() {
    console.log('called updateEditingSupplier');
    const supplierEdit: OfficeForm = { ...this.officeForm.value, id: this.supplier.id, name: this.supplier.name };
    this.update.emit(supplierEdit);
  }
  onEdit() {
    console.log(this.officeForm.value);
    const supplierEdit: OfficeForm = { ...this.officeForm.value, id: this.supplier.id, name: this.supplier.name };
    this.edit.emit(supplierEdit);
    this.setForm();
  }
  onSave() {
    const supplier: Supplier = { ...this.supplier, contact: { ...this.officeForm.value }, state: { editMode: false } };
    this.save.emit(supplier);
    this.setForm();
  }
  onCancel() {
    this.cancel.emit(this.supplier.id);
    this.setForm();
  }
  setForm() {
    if (!this.supplier.state.editMode) {
      this.officeForm.disable();
      if (this.supplier.contact.address) {
        this.officeForm.patchValue({ address: this.supplier.contact.address });
      } else {
        this.officeForm.patchValue({ address: null});
      }
      if (this.supplier.contact.telephone) {
        this.officeForm.patchValue({ telephone: [this.supplier.contact.telephone] });
      } else {
        this.officeForm.patchValue({ telephone: null});
      }
      if (this.supplier.contact.fax) {
        this.officeForm.patchValue({ fax: this.supplier.contact.fax });
      } else {
        this.officeForm.patchValue({ fax: null});
      }
      if (this.supplier.contact.email) {
        this.officeForm.patchValue({ email: this.supplier.contact.email });
      } else {
        this.officeForm.patchValue({ email: null});
      }
    } else {
      this.officeForm.enable();
      if (this.supplierEdit) {
        this.officeForm.patchValue({ address: this.supplierEdit.address });
        this.officeForm.patchValue({ telephone: [this.supplierEdit.telephone] });
        this.officeForm.patchValue({ fax: this.supplierEdit.fax });
        this.officeForm.patchValue({ email: this.supplierEdit.email });
      }
    }
  }
}
