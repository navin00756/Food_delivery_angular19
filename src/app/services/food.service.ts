import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IFoodItem } from '../models/food.model';

@Injectable({ providedIn: 'root' })
export class FoodService {
  constructor(private http: HttpClient, private api: ApiService) {}

  getByRestaurant(restaurantId: string): Observable<IFoodItem[]> {
    return this.http.get<IFoodItem[]>(`${this.api.base}/api/foods/${restaurantId}`);
  }
}
