import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { CartService } from '../../services/cart.service';
import { IFoodItem } from '../../models/food.model';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  restaurantId = '';
  foods: IFoodItem[] = [];
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId') || '';
    if (!this.restaurantId) return;

    this.loading = true;
    this.foodService.getByRestaurant(this.restaurantId).subscribe({
      next: res => {
        this.foods = res;
        this.loading = false;
      },
      error: () => {
        alert('Failed to load menu');
        this.loading = false;
      }
    });
  }

  addToCart(food: IFoodItem) {
    this.cartService.add(food._id, 1).subscribe({
      next: () => alert(`${food.name} added to cart ✅`),
      error: err => alert(err?.error?.message || 'Add to cart failed')
    });
  }

  goCart() {
    this.router.navigate(['/cart']);
  }
}
