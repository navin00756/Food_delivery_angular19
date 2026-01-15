import { IFoodItem } from './food.model';

export interface ICartItem {
  food: IFoodItem;
  quantity: number;
}

export interface ICart {
  _id: string;
  user: string;
  items: ICartItem[];
}
