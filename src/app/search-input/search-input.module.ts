import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { SearchInputComponent } from './search-input.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    SearchInputComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    SearchInputComponent
  ]
})
export class SearchInputModule { }
