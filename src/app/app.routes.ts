import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrutaComponent } from './fruta/fruta.component';
import { FruteriaComponent } from './fruteria/fruteria.component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Inicio'
  },
  {
    path: 'fruta',
    component: FrutaComponent,
    title: 'Una sola fruta'
  },
  {
    path: 'fruteria',
    component: FruteriaComponent,
    title: 'Frutería'
  },
  {
    path: '**', 
    redirectTo: '/home'
  }
];
