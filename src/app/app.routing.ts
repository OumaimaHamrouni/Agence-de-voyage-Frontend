import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { FullComponent } from './layouts/full/full.component';
import { AddresponsableComponent } from './material-component/addresponsable/addresponsable.component';
import { LoginComponent } from './SignUp Component/login/login.component';
import { RegisterComponent } from './SignUp Component/register/register.component';
 
export const AppRoutes: Routes = [
  {path: 'signup', component: RegisterComponent}, 
   

  {path: 'login', component: LoginComponent}, 
  

  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
