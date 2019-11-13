import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { OrganismHeaderComponent } from '../app/organisms/organism-header/organism-header.component';
import { OrganismCardFormComponent } from '../app/organisms/organism-card-form/organism-card-form.component';
import { OrganismCardsComponent } from '../app/organisms/organism-cards/organism-cards.component';
import { ViewHomeComponent } from '../app/views/view-home/view-home.component';

@NgModule({
  declarations: [
    AppComponent,

    OrganismHeaderComponent,
    OrganismCardFormComponent,
    OrganismCardsComponent,

    ViewHomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
