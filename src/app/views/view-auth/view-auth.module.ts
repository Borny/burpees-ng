import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAuthComponent } from './view-auth.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewAuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [],
  providers: [],
})

export class ViewAuthModule { }
