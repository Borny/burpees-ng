import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewAuthComponent } from './view-auth.component';

import { LoggedGuard } from '../../shared/services/logged.guard';

const authRoutes: Routes = [
  {
    path: '',
    component: ViewAuthComponent,
    canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})

export class AuthRouting { }
