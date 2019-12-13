import { NgModule } from '@angular/core';


import { AppRouting } from '../../app-routing.module';
import { View404Component } from './view-404.component';

@NgModule({
  declarations: [View404Component],
  imports: [
    AppRouting,
  ],
  exports: [],
  providers: []
})

export class View404Module { }
