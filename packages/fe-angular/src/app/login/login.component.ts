import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginData } from '../models/model.interface';

@Component({
  selector: 'app-auth-login-angular-jasmine-karma-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgbModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  loginFormData!: Partial<{ username: string | null; password: string | null }>;
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  isError = false;

  constructor(private apiService: ApiService) {}

  login() {
    this.loginFormData = this.loginForm.value;
    this.apiService.login(this.loginFormData).subscribe({
      next: (data: LoginData) => {
        console.log('data: ', data);
      },
      error: (err) => {
        console.log(err);
        this.isError = true;
      },
    });
  }
}
