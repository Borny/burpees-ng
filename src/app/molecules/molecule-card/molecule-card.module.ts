import { NgModule } from '@angular/core';

import { MoleculeCardComponent } from './molecule-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MoleculeCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MoleculeCardComponent
  ]
})

export class MoleculeCardModule { }
