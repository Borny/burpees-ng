import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHomeComponent } from './views/view-home/view-home.component';
import { ViewAuthComponent } from './views/view-auth/view-auth.component';
import { ViewDetailComponent } from './views/view-detail/view-detail.component';
import { View404Component } from './views/view-404/view-404.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ViewAuthComponent,
  },
  {
    path: 'home',
    component: ViewHomeComponent,
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'detail',
  //   component: ViewDetailComponent
  // },
  {
    path: '**',
    component: View404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouting { }
