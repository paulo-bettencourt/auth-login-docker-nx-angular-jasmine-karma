import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./login/login.component').then((mod) => mod.LoginComponent),
  },
];
