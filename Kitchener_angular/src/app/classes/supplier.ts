import { IContact } from './Icontact';
import { SalesRep } from '../services/sales-rep/sales-rep.service';

export class Supplier {
	private _id: string;
	private _name: string;
	private _address: string;
	private _contact: IContact;
	private _salesRep: SalesRep;

	constructor() { }

}
