import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import createSpyObj = jasmine.createSpyObj;

// Straight Jasmine testing without Angular's testing support
describe('ValueService', () => {
  let apiService: ApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.Spy('HttpClient', ['post']);
    apiService = new ApiService(httpClientSpy);
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    service.getPromiseValue().then((value) => {
      expect(value).toBe('promise value');
      done();
    });
  });
});
