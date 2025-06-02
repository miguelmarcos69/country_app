import { CountyLayoutComponent } from './country/layouts/countyLayout/countyLayout.component';
import { Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home_pages/home_pages.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePagesComponent,

  },
  {
    path: 'contries',
    loadChildren: () => import('./country/contry.routes'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
