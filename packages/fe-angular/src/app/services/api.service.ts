import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { LoginData } from '../models/model.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  apiUrl: string = environment.url;

  constructor(private http: HttpClient) {}

  login() {
    return this.http.post<LoginData>(this.apiUrl, {
      username: 'kminchelle',
      password: '0lelplR',
    });
  }
}
