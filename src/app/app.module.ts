import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrganismHeaderComponent } from './organisms/organism-header/organism-header.component';
import { OrganismCardFormComponent } from './organisms/organism-card-form/organism-card-form.component';
import { OrganismCardsComponent } from './organisms/organism-cards/organism-cards.component';
import { ViewHomeComponent } from './views/view-home/view-home.component';
import { MoleculeCardsComponent } from './molecules/molecule-cards/molecule-cards.component';
import { ViewAuthComponent } from './views/view-auth/view-auth.component';

const appRoutes: Routes = [
  { path: '', component: ViewAuthComponent },
  { path: 'home', component: ViewHomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,

    MoleculeCardsComponent,

    OrganismHeaderComponent,
    OrganismCardFormComponent,
    OrganismCardsComponent,

    ViewHomeComponent,
    ViewAuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
