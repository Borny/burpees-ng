import { NgModule } from '@angular/core';

import { OrganismCardsComponent } from './organism-cards.component';

import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OrganismCardsComponent
  ],
  imports: [
    CommonModule,

    MoleculeCardModule
  ],
  exports: [
    OrganismCardsComponent
  ]
})

export class OrganismCardsModule { }
