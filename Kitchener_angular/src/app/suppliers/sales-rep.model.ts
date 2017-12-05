import { IPerson } from '../shared/person.model';
import { IContact } from '../shared/contact.model';


export class SalesRep implements IPerson {
	_id: number;
	_firstName: string;
	_lastName: string;
	_contact: IContact;
	_supplierId: string;

	constructor() {}

}
