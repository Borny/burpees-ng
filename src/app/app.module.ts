import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
