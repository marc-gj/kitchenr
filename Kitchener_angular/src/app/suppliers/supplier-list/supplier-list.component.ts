import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier.model';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-supplier-list',
	templateUrl: './supplier-list.component.html',
	styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

	constructor(private supplierService: SupplierService) { }

	public suppliers$: Observable<Supplier[]>;

	ngOnInit() {
		this.suppliers$ = this.getSuppliers();
	}

	getSuppliers() {
		return this.supplierService.getSuppliers();
	}

}
