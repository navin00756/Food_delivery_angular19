import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class VendorService {

  constructor(private http: HttpClient, private api: ApiService) {}

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api.base}/api/vendor/orders`);
  }

  updateStatus(orderId: string, status: string): Observable<any> {
    return this.http.post<any>(`${this.api.base}/api/vendor/update-status`, {
      orderId,
      status
    });
  }
}
