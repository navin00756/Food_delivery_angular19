import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { FormsModule } from '@angular/forms';
import { VendorService } from '../../services/vendor.service';
import { AdminApiService } from '../../services/admin-api.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
  orders: any[] = [];
  deliveryPartners: any[] = [];
  selectedDeliveryPartnerId = '';
  loading = false;

  constructor(
    private vendorService: VendorService,
    private orderService: OrderService,
    private adminApi: AdminApiService
  ) {}

  ngOnInit(): void {
    this.load();
    this.loadDeliveryPartners();
  }
load() {
  this.loading = true;
  this.vendorService.getOrders().subscribe({
    next: (res: any) => {
      this.orders = res;
      this.loading = false;
    },
    error: (err: any) => {
      alert(err?.error?.message || 'Unauthorized');
      this.loading = false;
    }
  });
}

loadDeliveryPartners() {
  this.adminApi.getDeliveryPartners().subscribe({
    next: (res: any) => this.deliveryPartners = res,
    error: () => alert('Failed to load delivery partners')
  });
}

assign(orderId: string) {
  if (!this.selectedDeliveryPartnerId) {
    alert('Select Delivery Partner');
    return;
  }

  this.orderService.assignDelivery(orderId, this.selectedDeliveryPartnerId).subscribe({
    next: () => {
      alert('Assigned ✅');
      this.load();
    },
    error: (err: any) => alert(err?.error?.message || 'Assign failed')
  });
}

}
