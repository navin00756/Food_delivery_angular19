export interface IRestaurant {
  _id: string;
  name: string;
  description?: string;
  address?: string;
  owner?: string;
  isOpen?: boolean;
  createdAt?: string;
}