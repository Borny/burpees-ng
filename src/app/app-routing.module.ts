import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewAuthComponent } from './views/view-auth/view-auth.component';
// import { ViewDetailComponent } from './views/view-detail/view-detail.component';
// import { View404Component } from './views/view-404/view-404.component';
// import { AuthGuard } from './shared/services/auth.guard';
// import { ViewHomeModule } from './views/view-home/view-home.module';

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
