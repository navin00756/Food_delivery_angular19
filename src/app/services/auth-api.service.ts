import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  constructor(private http: HttpClient, private api: ApiService) {}

  register(payload: any): Observable<any> {
    return this.http.post(`${this.api.base}/api/auth/register`, payload);
  }

  login(payload: any): Observable<any> {
    return this.http.post(`${this.api.base}/api/auth/login`, payload);
  }
}
