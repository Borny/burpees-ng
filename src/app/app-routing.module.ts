import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/view-auth/view-auth.module').then(m => m.ViewAuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./views/view-home/view-home.module').then(m => m.ViewHomeModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./views/view-detail/view-detail.module').then(m => m.ViewDetailModule)
  },
  {
    path: '**',
    loadChildren: () => import('./views/view-404/view-404.module').then(m => m.View404Module)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})

export class AppRouting { }
