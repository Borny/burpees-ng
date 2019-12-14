
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewAuthComponent } from './view-auth.component';

const authRoutes: Routes = [
  {
    path: '',
    component: ViewAuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})

export class AuthRouting { }
