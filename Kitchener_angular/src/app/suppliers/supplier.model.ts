import { SalesRep } from './sales-rep.model';
import { IContact } from '../shared/contact.model';

/* import { IContact } from '../shared/contact.model'; */

export class Supplier {
  protected _id: string;
  protected _name: string;
  private _contact: IContact;
  protected _salesReps: SalesRep[];

  constructor(args: {
    name: string,
    _id: string,
    contact: IContact,
    salesReps: [{
      _id: string,
      firstName: string,
      lastName: string,
      contact: IContact
    }]
  }) {
    this.name = args.name;
    this.id = args._id;
    this.contact = args.contact;
    const salesRepArray: SalesRep[] = args.salesReps.map((salesRep) => {
      return new SalesRep(salesRep);
    });
    this.salesReps = salesRepArray;
  }

  protected get name(): string {
    return this._name;
  }

  protected set name(name: string) {
    this._name = name;
  }

  protected get id(): string {
    return this._id;
  }

  protected set id(id: string) {
    this._id = id;
  }

  get contact(): IContact {
    return this._contact;
  }

  set contact(contact: IContact) {
    this._contact = contact;
  }

  protected get salesReps(): SalesRep[] {
    return this._salesReps;
  }

  protected set salesReps(salesReps: SalesRep[]) {
    this._salesReps = salesReps;
  }

}
