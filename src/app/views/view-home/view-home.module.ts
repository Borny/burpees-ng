import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewHomeComponent } from './view-home.component';

import { OrganismCardFormModule } from '../../organisms/organism-card-form/organism-card-form.module';
import { OrganismCardsModule } from '../../organisms/organism-cards/organism-cards.module';
import { HomeRouting } from './home-routing.module';

@NgModule({
  declarations: [
    ViewHomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    OrganismCardFormModule,
    OrganismCardsModule,

    HomeRouting
  ],
})

export class ViewHomeModule { }
