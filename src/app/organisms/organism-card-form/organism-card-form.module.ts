import { NgModule } from '@angular/core';
import { OrganismCardFormComponent } from './organism-card-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OrganismCardFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    OrganismCardFormComponent
  ]
})

export class OrganismCardFormModule { }
