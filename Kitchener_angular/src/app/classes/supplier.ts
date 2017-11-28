import { IContact } from './Icontact';
import { SalesRep } from './sales-rep';

export class Supplier {
/* 	private _id: string; */
	private _name: string;
	private _address: string;
	/* private _contact: IContact;
	private _salesRep: SalesRep; */

	constructor(name: string, address: string) {
		this.name = name;
		this.address = address;
	}

	get name() {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	get address() {
		return this._address;
	}

	set address(address: string) {
		this._address = address;
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
