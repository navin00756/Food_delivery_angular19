import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorService } from '../../services/vendor.service';

@Component({
  standalone: true,
  selector: 'app-vendor-orders',
  imports: [CommonModule],
  templateUrl: './vendor-orders.component.html'
})
export class VendorOrdersComponent implements OnInit {
  orders: any[] = [];
  loading = false;

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.loading = true;
    this.vendorService.getOrders().subscribe({
      next: (res: any) => {
        this.orders = res;
        this.loading = false;
      },
      error: (err: any) => {
        alert(err?.error?.message || 'Unauthorized / vendor only');
        this.loading = false;
      }
    });
  }

  confirmOrder(orderId: string) {
    this.vendorService.updateStatus(orderId, 'CONFIRMED').subscribe({
      next: () => this.loadOrders(),
      error: (err: any) => alert(err?.error?.message || 'Update failed')
    });
  }

  preparingOrder(orderId: string) {
    this.vendorService.updateStatus(orderId, 'PREPARING').subscribe({
      next: () => this.loadOrders(),
      error: (err: any) => alert(err?.error?.message || 'Update failed')
    });
  }
}


