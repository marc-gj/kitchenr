import { Contact } from './contact.model';

export abstract class Person {
  id: string;
  firstName: string;
  lastName: string;
  contact: Contact;

  static make(event: { _id: string, firstName: string, lastName: string, contact: Contact }) {
    return {
      id: event._id,
      firstName: event.firstName,
      lastName: event.lastName,
      contact: event.contact
    };
  }

  static default() {
    return {
      id: '123',
      firstName: 'Default',
      lastName: 'Defaulter',
      contact: {}
    };
  }

  static searchArray(event: Person): string {
    const searchString = event.firstName + ' ' +
    event.lastName + ' ' +
    event.contact.cellphone + ' ' +
    event.contact.email + ' ' +
    event.contact.telephone;
    return searchString;
  }
}
