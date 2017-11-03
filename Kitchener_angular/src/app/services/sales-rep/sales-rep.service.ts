import { Injectable } from '@angular/core';
import { IPerson } from '../../classes/Iperson';
import { IContact } from '../../classes/Icontact';
import { Supplier } from '../supplier/supplier.service';

@Injectable()
export class SalesRepService {

	constructor() { }

}

export class SalesRep implements IPerson {
	id: number;
	firstName: string;
	lastName: string;
	contact: IContact;
	supplierId: string;

	constructor() {}

}
