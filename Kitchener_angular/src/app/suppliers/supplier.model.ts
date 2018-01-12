import { SalesRep } from './sales-rep.model';
import { Contact } from '../shared/contact.model';
import { Person } from '../shared/person.model';

/* import { Contact } from '../shared/contact.model'; */

export class Supplier {
  id: string;
  name: string;
  contact: Contact;
  salesReps: SalesRep[];
  state: { editMode: boolean };

  static searchArray(event: Supplier): string {
    let searchString: string =
      event.name +
      event.contact.email +
      event.contact.telephone +
      event.contact.fax;
    if (event.salesReps[0]) {
      searchString += Person.searchArray(event.salesReps[0]);
    }
    return searchString.toLocaleLowerCase();
  }
}

