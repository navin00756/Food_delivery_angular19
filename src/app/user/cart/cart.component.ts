import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { ICart } from '../../models/cart.model';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  cart: ICart | null = null;
  loading = false;
  total = 0;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.loading = true;
    this.cartService.getCart().subscribe({
      next: res => {
        this.cart = res;
        this.total = this.cart?.items?.reduce((sum, i) => sum + (i.food.price * i.quantity), 0) || 0;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        alert(err?.error?.message || 'Failed to load cart');
      }
    });
  }

  clearCart() {
    this.cartService.clear().subscribe({
      next: () => {
        alert('Cart cleared ✅');
        this.loadCart();
      },
      error: () => alert('Failed to clear cart')
    });
  }

  placeOrder() {
    this.orderService.placeOrder().subscribe({
      next: res => {
        alert('Order Placed ✅');
        this.router.navigate(['/orders']);
      },
      error: err => alert(err?.error?.message || 'Place order failed')
    });
  }
}
