import { Person } from '../shared/person.model';
import { IContact } from '../shared/contact.model';


export class SalesRep extends Person {
  _supplierId?: string;

  constructor(args: {
    _id: string,
    firstName: string,
    lastName: string,
    contact: IContact
  }) {
    super (args);
   }
}
