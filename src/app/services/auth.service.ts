import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private TOKEN_KEY = 'token';
  private USER_KEY = 'user';

  setLogin(token: string, user: IUser) {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUser(): IUser | null {
    const u = localStorage.getItem(this.USER_KEY);
    return u ? JSON.parse(u) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  hasRole(role: string): boolean {
    return this.getUser()?.role === role;
  }
}
