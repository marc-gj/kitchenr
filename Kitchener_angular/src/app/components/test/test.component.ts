import { Component, OnInit } from '@angular/core';
import { SupplierService } from '../../services/supplier/supplier.service';
import { IContact } from '../../classes/Icontact';
import { SalesRep } from '../../services/sales-rep/sales-rep.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	constructor() { }

	ngOnInit() { }

}
