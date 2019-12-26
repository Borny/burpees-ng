import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewDetailComponent } from './view-detail.component';
import { AuthGuard } from '../../shared/services/auth.guard';

const detailRoutes: Routes = [
  {
    path: '',
    component: ViewDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(detailRoutes)],
  exports: [RouterModule]
})

export class DetailRouting { }
