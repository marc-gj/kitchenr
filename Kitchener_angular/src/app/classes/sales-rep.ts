import { IPerson } from './Iperson';
import { IContact } from './Icontact';


export class SalesRep implements IPerson {
	_id: number;
	_firstName: string;
	_lastName: string;
	_contact: IContact;
	_supplierId: string;

	constructor() {}

}
