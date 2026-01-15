import { IFoodItem } from "./food.model";
import { IRestaurant } from "./restaurant.model";

export type OrderStatus =
  | 'PLACED'
  | 'CONFIRMED'
  | 'PREPARING'
  | 'OUT_FOR_DELIVERY'
  | 'DELIVERED';

export interface IOrderItem {
  food: IFoodItem;
  quantity: number;
}

export interface IOrder {
  _id: string;
  user: string;
  restaurant: IRestaurant;
  items: IOrderItem[];
  totalAmount: number;
  status: OrderStatus;
  deliveryPartner?: string | null;
  createdAt?: string;
}
