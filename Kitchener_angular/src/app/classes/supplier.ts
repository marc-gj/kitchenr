import { IContact } from './Icontact';
import { SalesRep } from './sales-rep';

export class Supplier {
/* 	private _id: string; */
	private _name: string;
	private _contact: IContact;
	private _salesRep: SalesRep;

	constructor(name: string) {
		this.name = name;
	}

	get name() {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	/* get contact() {
		return this._contact;
	}

	set contact(contact: IContact) {
		this._contact = contact;
	}

	get salesRep() {
		return this._salesRep;
	}

	set salesRep(salesRep: SalesRep) {
		this._salesRep = salesRep;
	}
 */
}
