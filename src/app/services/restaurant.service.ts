import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IRestaurant } from '../models/restaurant.model';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  constructor(private http: HttpClient, private api: ApiService) {}

  getAll(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>(`${this.api.base}/api/restaurants`);
  }
}
