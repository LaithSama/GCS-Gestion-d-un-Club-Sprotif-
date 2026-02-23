import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'connexion',
    loadComponent: () => import('./connexion/connexion.page').then( m => m.ConnexionPage)
  },
  {
    path: 'inscription',
    loadComponent: () => import('./inscription/inscription.page').then( m => m.InscriptionPage)
  },
  {
    path: 'user-page',
    loadComponent: () => import('./user-page/user-page.page').then( m => m.UserPagePage)
  },
  {
    path: 'coach-page',
    loadComponent: () => import('./coach-page/coach-page.page').then( m => m.CoachPagePage)
  },
];
