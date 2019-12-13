import { NgModule } from '@angular/core';

import { MoleculeCardComponent } from './molecule-card.component';

@NgModule({
  declarations: [
    MoleculeCardComponent
  ],
  exports: [
    MoleculeCardComponent
  ]
})

export class MoleculeCardModule { }
