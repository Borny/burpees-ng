import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganismCardsComponent } from './organism-cards.component';
import { LoaderModule } from '../../shared/loader/loader.module';

import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';

@NgModule({
  declarations: [
    OrganismCardsComponent,
  ],
  imports: [
    CommonModule,
    LoaderModule,

    MoleculeCardModule
  ],
  exports: [
    OrganismCardsComponent
  ]
})

export class OrganismCardsModule { }
