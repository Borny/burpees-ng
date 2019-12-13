import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrganismHeaderComponent } from './organisms/organism-header/organism-header.component';

import { ViewAuthModule } from './views/view-auth/view-auth.module';
import { View404Module } from './views/view-404/view-404.module';
import { ViewDetailModule } from './views/view-detail/view-detail.module';
import { ViewHomeModule } from './views/view-home/view-home.module';

import { AppRouting } from './app-routing.module';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { OrganismCardFormComponent } from './organisms/organism-card-form/organism-card-form.component';
import { OrganismCardsComponent } from './organisms/organism-cards/organism-cards.component';
// import { View404Component } from './views/view-404/view-404.component';
// import { ViewDetailComponent } from './views/view-detail/view-detail.component';
// import { MoleculeCardComponent } from './molecules/molecule-card/molecule-card.component';

@NgModule({
  declarations: [
    AppComponent,

    OrganismHeaderComponent,

    // ViewHomeComponent,

    // OrganismCardFormComponent,
    // OrganismCardsComponent,
    // MoleculeCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRouting,

    ViewAuthModule,
    ViewHomeModule,
    // ViewDetailModule,
    View404Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
