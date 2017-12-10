import { Stock } from '../stock/stock.model';

export class Ingredient {
  constructor (
    private name: string,
    private stock: Stock[],
    private category: string[],
    private classification: string[]) {}
}
