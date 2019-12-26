
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { View404Component } from './view-404.component';

const notFoundRoutes: Routes = [
  {
    path: '',
    component: View404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(notFoundRoutes)],
  exports: [RouterModule],
})

export class NotFoundRouting { }
