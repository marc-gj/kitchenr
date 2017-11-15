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

	constructor(private _id: string,
		private _name: string,
		private _address: string,
		private _contact: IContact,
		private _salesRep: SalesRep) {}

	/* get name(): string {
		return this._name;
	} */

	set telephone(number: number) {
		this._contact.telephone[this._contact.telephone.length - 1] = number;
	}

	get telephone(): number {
		return this._contact.telephone[0];
	}
}
