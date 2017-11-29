import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../classes/supplier';
import { SupplierService } from '../../services/supplier/supplier.service';
import { IContact } from '../../classes/Icontact';
import { SalesRep } from '../../classes/sales-rep';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	constructor(private supplier: SupplierService) { }



	ngOnInit() {

	}

}
