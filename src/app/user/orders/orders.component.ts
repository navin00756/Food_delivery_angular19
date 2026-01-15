import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { IOrder } from '../../models/order.model';

@Component({
  standalone: true,
  selector: 'app-orders',
  imports: [CommonModule],
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {
  orders: IOrder[] = [];
  loading = false;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loading = true;
    this.orderService.myOrders().subscribe({
      next: res => {
        this.orders = res;
        this.loading = false;
      },
      error: () => {
        alert('Failed to load orders');
        this.loading = false;
      }
    });
  }
}
