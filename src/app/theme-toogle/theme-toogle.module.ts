import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ThemeToogleComponent } from './theme-toogle.component';

@NgModule({
  declarations: [
    ThemeToogleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  exports: [
    ThemeToogleComponent
  ]
})
export class ThemeToogleModule { }
