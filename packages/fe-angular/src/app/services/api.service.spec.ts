import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('ValueService', () => {
  let apiService: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    apiService = new ApiService(httpClientSpy);
  });

  it('should build the service', () => {
    expect(apiService).toBeTruthy();
  });

  it('should login and return a json object', (done: DoneFn) => {
    const mockLogin = {
      username: 'kminchelle',
      password: '1111',
    };
    const mockData = {
      _id: '646dec96b7783f5e7c726abb',
      username: 'kminchelle',
      password: '1111',
      __v: 0,
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2ODQ5NDI3MTd9.9PBcOsHbj3JiMKtcvpHJMTzy43shyZU4cNTaVLhEHBU',
    };

    httpClientSpy.post.and.returnValue(of(mockData)); // Set up the mock response

    apiService.login(mockLogin).subscribe({
      next: (data) => {
        expect(data).toEqual(mockData);
        done();
      },
      error: done.fail,
    });
  });
});
