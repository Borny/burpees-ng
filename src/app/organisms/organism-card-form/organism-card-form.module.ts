import { NgModule } from '@angular/core';
import { OrganismCardFormComponent } from './organism-card-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OrganismCardFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    OrganismCardFormComponent
  ]
})

export class OrganismCardFormModule { }
