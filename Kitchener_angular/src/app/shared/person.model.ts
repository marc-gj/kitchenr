import { IContact } from './contact.model';

export abstract class Person {
  protected _id: string;
  protected _firstName: string;
  protected _lastName: string;
  private _contact: IContact;

  constructor(
              args: {
                _id: string,
                firstName: string,
                lastName: string,
                contact: IContact
              }
  ) {
    this.id = args._id;
    this.firstName = args.firstName;
    this.lastName = args.lastName;
    this.contact = args.contact;
  }

  protected get id(): string {
    return this._id;
  }

  protected set id(id: string) {
    this._id = id;
  }

  protected get firstName(): string {
    return this._firstName;
  }

  protected set firstName(firstName: string) {
    this._firstName = firstName;
  }

  protected get lastName(): string {
    return this._lastName;
  }

  protected set lastName(lastName: string) {
    this._lastName = lastName;
  }

  protected get contact(): IContact {
    return this._contact;
  }

  protected set contact(contact: IContact) {
    this._contact = contact;
  }
}
