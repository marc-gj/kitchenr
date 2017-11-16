import { IContact } from './Icontact';
import { SalesRep } from '../services/sales-rep/sales-rep.service';

export class Supplier {
	private _id: string;
	private _name: string;
	private _address: string;
	private _contact: IContact;
	private _salesRep: SalesRep;

	constructor() { }

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
