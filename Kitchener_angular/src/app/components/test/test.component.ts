import { Component, OnInit } from '@angular/core';
import { Supplier, SupplierService } from '../../services/supplier/supplier.service';
import { IContact } from '../../classes/Icontact';
import { SalesRep } from '../../services/sales-rep/sales-rep.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	constructor() { }

	id = '123daw';
	name = 'Hadco';
	address = '4 Palm';
	contact: IContact = {
		telephone: [1233],
		cellphone: [12341],
		email: ['yes@hadco.com']
	};
	salesRep: SalesRep = {
		id: 1234,
		firstName: 'Dan',
		lastName: 'Henderson',
		contact: {
			telephone: [4124],
			cellphone: [56125125],
			email: ['no@hadco.com']
		},
		supplierId: 'jadiw412'
	};

	ngOnInit() {
		let hadco = new Supplier(this.id,
														this.name,
														this.address,
														this.contact,
														this.salesRep
		);

		console.log(hadco);
		hadco.telephone = 1234;
		console.log(hadco);
	}

}
