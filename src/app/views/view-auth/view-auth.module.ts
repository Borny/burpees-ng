import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAuthComponent } from './view-auth.component';
import { FormsModule } from '@angular/forms';
import { AuthRouting } from './auth.routing';

@NgModule({
  declarations: [
    ViewAuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRouting
  ],
  exports: [],
  providers: [],
})

export class ViewAuthModule { }
