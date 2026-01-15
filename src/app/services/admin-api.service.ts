import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminApiService {
  constructor(private http: HttpClient, private api: ApiService) {}

  getDeliveryPartners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api.base}/api/admin/delivery-partners`);
  }
}