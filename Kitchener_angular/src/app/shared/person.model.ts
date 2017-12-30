import { Contact } from './contact.model';

export abstract class Person {
  protected _id: string;
  protected _firstName: string;
  protected _lastName: string;
  private _contact: Contact;

  constructor(
              args: {
                _id: string,
                firstName: string,
                lastName: string,
                contact: Contact
              }
  ) {
    this.id = args._id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.contact = args.contact;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(firstName: string) {
    this._firstName = firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(lastName: string) {
    this._lastName = lastName;
  }

  get contact(): Contact {
    return this._contact;
  }

  set contact(contact: Contact) {
    this._contact = contact;
  }

  searchArray(): string {
    const searchString = this.firstName + this.lastName + this.contact.cellphone + this.contact.email + this.contact.telephone;
    return searchString;
  }
}
