import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { DropdownDirective } from '../app/shared/directives/dropdown.directive';

import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { OrganismHeaderComponent } from './organisms/organism-header/organism-header.component';


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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
