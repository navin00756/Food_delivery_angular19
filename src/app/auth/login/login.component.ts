import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../../services/auth-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  mode: 'login' | 'register' = 'login';

  form: any = {
    name: '',
    email: '',
    password: '',
    role: 'user'
  };

  constructor(
    private api: AuthApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  toggleMode() {
    this.mode = this.mode === 'login' ? 'register' : 'login';
  }

  submit() {
    this.mode === 'login' ? this.login() : this.register();
  }

  register() {
    this.api.register(this.form).subscribe({
      next: () => {
        alert('Registered ✅ Now login');
        this.mode = 'login';
      },
      error: err => alert(err?.error?.message || 'Register failed')
    });
  }

  login() {
    this.api.login({ email: this.form.email, password: this.form.password }).subscribe({
      next: (res: any) => {
        this.auth.setLogin(res.token, res.user);

        const role = res.user.role;

        if (role === 'admin') this.router.navigate(['/admin']);
        else if (role === 'vendor') this.router.navigate(['/vendor/orders']);
        else if (role === 'delivery') this.router.navigate(['/delivery/orders']);
        else this.router.navigate(['/home']);
      },
      error: err => alert(err?.error?.message || 'Login failed')
    });
  }
}
