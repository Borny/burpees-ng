import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewHomeComponent } from './view-home.component';

import { AuthGuard } from '../../shared/services/auth.guard';

const homeRoutes: Routes = [
  {
    path: '',
    component: ViewHomeComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRouting { }
