import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DropdownDirective } from '../app/shared/directives/dropdown.directive';

import { AppComponent } from './app.component';

import { OrganismHeaderComponent } from './organisms/organism-header/organism-header.component';

import { AppRouting } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OrganismHeaderComponent,

    DropdownDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
