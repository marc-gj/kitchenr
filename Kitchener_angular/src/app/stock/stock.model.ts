export class Stock {
  private id: number;
  private name: string;
  private brand: string;
  private price: number;
  private supplier: string;
  private purchasedBy: purchasedBy;
  private itemsPerCase: number;
  private quantityPerItem: number;
  private unitOfMeasure: unitOfMeasure;
  private type: stockType[];
  private minStockLevel: number;
  private maxStockLevel: number;
  private stockParLevel: number;
  private currentStockLevel: number;
  private storageLocation: string;
}

export enum purchasedBy { Case, Unit, Weight, Volume }

export enum unitOfMeasure {
  gram = 'g',
  kilogram = 'kg',
  ounce = 'oz',
  pound = 'lb',
  milliliter = 'ml',
  litre = 'l',
  teaspoon = 'tsp',
  tablespoon = 'tbsp',
  flOunce = 'fl.oz',
  cup = 'cup',
  unit = 'unit'
}

export enum stockType {
  dry = 'Dry good',
  frozen = 'Frozen',
  fresh = 'Fresh produce',
  poultry = 'Poultry',
  fish = 'Fish',
  shellFish = 'Shell fish',
  beef = 'Beef',
  pork = 'Pork',
  lamb = 'Lamb',
  condiment = 'Condiment',
  oil = 'Oil',
  sauce = 'Sauce',
  dairy = 'Dairy',
  seasoning = 'Seasoning',
  fruit = 'Fruit',
  vegetable = 'Vegetable',
  pasta = 'Pasta',
  sushi = 'Sushi'
}
