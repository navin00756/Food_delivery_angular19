import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ICart } from '../models/cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private http: HttpClient, private api: ApiService) {}

  add(foodId: string, quantity: number): Observable<any> {
    return this.http.post(`${this.api.base}/api/cart/add`, { foodId, quantity });
  }

  getCart(): Observable<ICart> {
    return this.http.get<ICart>(`${this.api.base}/api/cart`);
  }

  clear(): Observable<any> {
    return this.http.delete(`${this.api.base}/api/cart/clear`);
  }
}
