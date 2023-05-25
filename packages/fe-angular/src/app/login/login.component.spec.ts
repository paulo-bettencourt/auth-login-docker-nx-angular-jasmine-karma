import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let apiService: any;
  const mockData = {
    _id: '646dec96b7783f5e7c726abb',
    username: 'kminchelle',
    password: '1111',
    __v: 0,
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2ODQ5NDI3MTd9.9PBcOsHbj3JiMKtcvpHJMTzy43shyZU4cNTaVLhEHBU',
  };
  const mockLogin = {
    username: 'kminchelle',
    password: '1111',
  };

  beforeEach(async () => {
    apiService = jasmine.createSpyObj('ApiService', ['login']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [ApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.textContent).toContain('Auth Login');
  });

  fit('should invoke the login method', (done: DoneFn) => {
    apiService.login.and.returnValue(of(mockData));

    apiService.login(mockLogin).subscribe({
      next: (data: any) => {
        expect(data).toEqual(mockData);
        done();
      },
      error: done.fail,
    });
  });
});
