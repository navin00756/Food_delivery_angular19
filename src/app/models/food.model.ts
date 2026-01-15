export interface IFoodItem {
  _id: string;
  name: string;
  price: number;
  description?: string;
  restaurant: string;
  isAvailable?: boolean;
}
