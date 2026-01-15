import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { IOrder } from '../models/order.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient, private api: ApiService) {}

  placeOrder(): Observable<any> {
    return this.http.post(`${this.api.base}/api/orders`, {});
  }

  myOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.api.base}/api/orders/my`);
  }

  // admin assign delivery
  assignDelivery(orderId: string, deliveryPartnerId: string): Observable<any> {
    return this.http.post(`${this.api.base}/api/orders/assign-delivery`, { orderId, deliveryPartnerId });
  }
}
