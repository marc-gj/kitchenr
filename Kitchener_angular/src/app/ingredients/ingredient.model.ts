import { Stock } from '../stock/stock.model';

export class Ingredient {
  constructor (
    private _name: string,
    private _stock: Stock[],
    private _category: string[],
    private _classification: string[]) {}
}
