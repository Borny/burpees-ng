import { NgModule } from '@angular/core';


import { NotFoundRouting } from './not-found.routing';
import { View404Component } from './view-404.component';

@NgModule({
  declarations: [View404Component],
  imports: [
    NotFoundRouting
  ],
  exports: [],
  providers: []
})

export class View404Module { }
