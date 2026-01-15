import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';

import { UserHomeComponent } from './user/user-home/user-home.component';
import { MenuComponent } from './user/menu/menu.component';
import { CartComponent } from './user/cart/cart.component';
import { OrdersComponent } from './user/orders/orders.component';

import { VendorOrdersComponent } from './vendor/vendor-orders/vendor-orders.component';
import { DeliveryOrdersComponent } from './delivery/delivery-orders/delivery-orders.component';

import { AdminComponent } from './admin/admin/admin.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },

  // USER
  { path: 'home', component: UserHomeComponent },
  { path: 'menu/:restaurantId', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'orders', component: OrdersComponent },

  // VENDOR
  { path: 'vendor/orders', component: VendorOrdersComponent },

  // DELIVERY
  { path: 'delivery/orders', component: DeliveryOrdersComponent },

  // ADMIN
  { path: 'admin', component: AdminComponent },

  { path: '**', redirectTo: 'login' }
];
