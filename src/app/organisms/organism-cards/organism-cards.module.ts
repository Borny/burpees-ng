import { NgModule } from '@angular/core';

import { OrganismCardsComponent } from './organism-cards.component';
import { LoaderComponent } from '../../shared/loader/loader.component';

import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OrganismCardsComponent,
    LoaderComponent
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
