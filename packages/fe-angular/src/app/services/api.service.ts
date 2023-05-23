import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { LoginData } from '../models/model.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  apiUrl: string = environment.url;

  constructor(private http: HttpClient) {}

  login() {
    /*     return this.http.post<LoginData>(this.apiUrl, {
      username: 'kminchelle',
      password: '0lelplR',
    }); */
    return this.http.get('localhost:3000/');
  }

  /*   login() {
    return this.http.post<LoginData>(
      'https://dummyjson.com/auth/login',
      JSON.stringify({
        username: 'kminchelle',
        password: '0lelplR',
      }),
      { headers: { 'Content-Type': 'application/json' } }
    );
  } */
}
