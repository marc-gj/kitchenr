import { IContact } from './Icontact';

export interface IPerson {
	_id: number;
	_firstName: string;
	_lastName: string;
	_contact: IContact;
}
