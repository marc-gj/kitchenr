import { Injectable } from '@angular/core';
import { SalesRep } from '../sales-rep/sales-rep.service';
import { IContact } from '../../classes/Icontact';
import { Headers, Http } from '@angular/http';

@Injectable()
export class SupplierService {

	constructor(http: Http) { }

	save(supplier: Supplier) {
		
	}

}

export class Supplier {
	private _id: string;
	private _name: string;
	private _address: string;
	private _contact: IContact;
	private _salesRep: SalesRep;

	constructor() {
		this._id = 'thisistheid';
		this._name = 'hadoc because i wrote it',
		this._address = '4 palm',
		this._contact = {
			telephone: [12341232],
			cellphone: [51234123],
			email: ['hadco@email.com']
		},
		this._salesRep = {
			id: 1,
			firstName: 'Dan',
			lastName: 'Rem',
			contact: {
				telephone: [123141],
				cellphone: [12314],
				email: ['rep@email.com']
			},
			supplierId: this._id
		};
	}

	get name(): string {
		return this._name;
	}

	set telephone(number: number) {
		this._contact.telephone[this._contact.telephone.length] = number;
	}

	get telephone(): number {
		return this._contact.telephone[1];
	}
}
