import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-auth-login-angular-jasmine-karma-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgbModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService],
})
export class LoginComponent {
  // apiService = Inject(ApiService);

  constructor(private apiService: ApiService) {}

  login() {
    this.apiService.login().subscribe({
      next: (data) => {
        console.log('data: ', data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
