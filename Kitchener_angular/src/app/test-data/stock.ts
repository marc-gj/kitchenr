import { Stock, purchasedBy, unitOfMeasure, stockType } from '../classes/stock';

export const STOCK: Stock[] = [{
  id: 1,
  name: 'Ketchup',
  brand: 'Matouks',
  price: 12,
  supplier: 'Malabar Meats',
  purchasedBy: purchasedBy.case,
  itemsPerCase: 1,
  quantityPerItem: 1,
  unitOfMeasure: unitOfMeasure.mililitre,
  type: [stockType.condiment, stockType.sauce]
},
{
  id: 2,
  name: 'Mustard',
  brand: 'Matouks',
  price: 12,
  supplier: 'Malabar Meats',
  purchasedBy: purchasedBy.case,
  itemsPerCase: 1,
  quantityPerItem: 1,
  unitOfMeasure: unitOfMeasure.mililitre,
  type: [stockType.condiment, stockType.sauce]
},
{
  id: 3,
  name: 'Pepper',
  brand: 'Matouks',
  price: 12,
  supplier: 'Malabar Meats',
  purchasedBy: purchasedBy.case,
  itemsPerCase: 1,
  quantityPerItem: 1,
  unitOfMeasure: unitOfMeasure.mililitre,
  type: [stockType.condiment, stockType.sauce]
},
{
  id: 4,
  name: 'Garlic Sauce',
  brand: 'Matouks',
  price: 12,
  supplier: 'Malabar Meats',
  purchasedBy: purchasedBy.case,
  itemsPerCase: 1,
  quantityPerItem: 1,
  unitOfMeasure: unitOfMeasure.mililitre,
  type: [stockType.condiment, stockType.sauce]
},
{
  id: 5,
  name: 'Mayonnaise',
  brand: 'Matouks',
  price: 12,
  supplier: 'Malabar Meats',
  purchasedBy: purchasedBy.case,
  itemsPerCase: 1,
  quantityPerItem: 1,
  unitOfMeasure: unitOfMeasure.mililitre,
  type: [stockType.condiment, stockType.sauce]
},
{
  id: 6,
  name: 'Aioli',
  brand: 'Matouks',
  price: 12,
  supplier: 'Malabar Meats',
  purchasedBy: purchasedBy.case,
  itemsPerCase: 1,
  quantityPerItem: 1,
  unitOfMeasure: unitOfMeasure.mililitre,
  type: [stockType.condiment, stockType.sauce]
},
{
  id: 7,
  name: 'BBQ Sauce',
  brand: 'Matouks',
  price: 12,
  supplier: 'Malabar Meats',
  purchasedBy: purchasedBy.case,
  itemsPerCase: 1,
  quantityPerItem: 1,
  unitOfMeasure: unitOfMeasure.mililitre,
  type: [stockType.condiment, stockType.sauce]
},
];
