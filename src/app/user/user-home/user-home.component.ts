import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { IRestaurant } from '../../models/restaurant.model';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-user-home',
  imports: [CommonModule,NavbarComponent],
  templateUrl: './user-home.component.html'
})
export class UserHomeComponent implements OnInit {
  restaurants: IRestaurant[] = [];
  loading = false;

  constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.loading = true;
    this.restaurantService.getAll().subscribe({
      next: res => {
        this.restaurants = res;
        this.loading = false;
      },
      error: () => {
        alert('Failed to load restaurants');
        this.loading = false;
      }
    });
  }

  openMenu(r: IRestaurant) {
    this.router.navigate(['/menu', r._id]);
  }
}
