import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeliveryService {
  constructor(private http: HttpClient, private api: ApiService) {}

  assignedOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api.base}/api/delivery/orders`);
  }

  updateStatus(orderId: string, status: 'OUT_FOR_DELIVERY' | 'DELIVERED'): Observable<any> {
    return this.http.post(`${this.api.base}/api/delivery/update-status`, { orderId, status });
  }
}