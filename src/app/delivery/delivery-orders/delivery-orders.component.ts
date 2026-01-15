import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryService } from '../../services/delivery.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-delivery-orders',
  imports: [CommonModule,NavbarComponent],
  templateUrl: './delivery-orders.component.html'
})
export class DeliveryOrdersComponent implements OnInit {
  orders: any[] = [];
  loading = false;

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.loading = true;
    this.deliveryService.assignedOrders().subscribe({
      next: res => {
        this.orders = res;
        this.loading = false;
      },
      error: err => {
        alert(err?.error?.message || 'Unauthorized / delivery only');
        this.loading = false;
      }
    });
  }

  outForDelivery(orderId: string) {
    this.deliveryService.updateStatus(orderId, 'OUT_FOR_DELIVERY').subscribe({
      next: () => this.load(),
      error: err => alert(err?.error?.message || 'Update failed')
    });
  }

  delivered(orderId: string) {
    this.deliveryService.updateStatus(orderId, 'DELIVERED').subscribe({
      next: () => this.load(),
      error: err => alert(err?.error?.message || 'Update failed')
    });
  }
}
