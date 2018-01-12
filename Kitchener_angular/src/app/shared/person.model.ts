import { Contact } from './contact.model';

export abstract class Person {
  id: string;
  firstName: string;
  lastName: string;
  contact: Contact;

  static searchArray(event: Person): string {
    const searchString = event.firstName + event.lastName + event.contact.cellphone + event.contact.email + event.contact.telephone;
    return searchString;
  }
}
