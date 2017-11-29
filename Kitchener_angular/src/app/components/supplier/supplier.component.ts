import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier/supplier.service';
import { Supplier } from '../../classes/supplier';


@Component({
	selector: 'app-supplier',
	templateUrl: './supplier.component.html',
	styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

	constructor(private supplierService: SupplierService) { }

	private suppliers: Supplier[];

	ngOnInit() {
	}

	getSuppliers(): void {
		this.supplierService.getSuppliers()
		.subscribe(suppliers => this.suppliers = suppliers);
	}

}
