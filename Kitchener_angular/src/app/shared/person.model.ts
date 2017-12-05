import { IContact } from './contact.model';

export interface IPerson {
	_id: number;
	_firstName: string;
	_lastName: string;
	_contact: IContact;
}
