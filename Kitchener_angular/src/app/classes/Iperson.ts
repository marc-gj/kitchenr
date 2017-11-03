import { IContact } from './Icontact';

export interface IPerson {
	id: number;
	firstName: string;
	lastName: string;
	contact: IContact;
}
