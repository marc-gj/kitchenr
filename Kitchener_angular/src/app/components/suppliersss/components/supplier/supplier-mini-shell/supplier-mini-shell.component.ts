import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../../../../services/supplier/supplier.service';

@Component({
	selector: 'app-supplier-mini-shell',
	templateUrl: './supplier-mini-shell.component.html',
	styleUrls: ['./supplier-mini-shell.component.css']
})
export class SupplierMiniShellComponent implements OnInit {

	constructor(private supplierService: SupplierService) { }

	ngOnInit() {

	}

	getSupplier(id) {
		this.supplierService.getSupplier(id);
	}

}
