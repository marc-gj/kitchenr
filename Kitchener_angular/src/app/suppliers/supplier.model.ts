import { SalesRep } from './sales-rep.model';
import { Contact } from '../shared/contact.model';

/* import { Contact } from '../shared/contact.model'; */

export class Supplier {
  protected _id: string = '';
  protected _name: string = '';
  private _contact: Contact;
  protected _salesReps: SalesRep[];
  protected _state: { editMode: boolean } = { editMode: false };

  constructor(args: {
                      name: string,
                      _id: string,
                      contact: Contact,
                      salesReps: [{
                        _id: string,
                        firstName: string,
                        lastName: string,
                        contact: Contact
                      }]
                    }) {
    this.name = args.name;
    this.id = args._id;
    this.contact = args.contact;
    const salesRepArray: SalesRep[] = args.salesReps.map((salesRep) => {
      return new SalesRep(salesRep);
    });
    this.salesReps = salesRepArray;
    this.state = { editMode: false };
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get contact(): Contact {
    return this._contact;
  }

  set contact(contact: Contact) {
    this._contact = contact;
  }

  get salesReps(): SalesRep[] {
    return this._salesReps;
  }

  set salesReps(salesReps: SalesRep[]) {
    this._salesReps = salesReps;
  }

  get state() {
    return this._state;
  }

  set state(state: { editMode: boolean }) {
    this._state = state;
  }

  searchArray(): string {
    let searchString: string =
      this.name +
      this.contact.email +
      this.contact.telephone +
      this.contact.fax;
    if (this.salesReps[0]) {
      searchString += this.salesReps[0].searchArray();
    }
    return searchString.toLocaleLowerCase();
  }

}
