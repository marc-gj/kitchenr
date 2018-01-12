import { Person } from '../shared/person.model';

export interface SalesRep extends Person {
  _supplierId?: string;
}
