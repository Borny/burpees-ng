import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDetailComponent } from './view-detail.component';

import { LoaderModule } from '../../shared/loader/loader.module';

import { DetailRouting } from './detail.routing';

@NgModule({
  declarations: [
    ViewDetailComponent,
  ],
  imports: [
    CommonModule,
    LoaderModule,

    DetailRouting,
  ],
  exports: [],
  providers: []
})

export class ViewDetailModule { }
