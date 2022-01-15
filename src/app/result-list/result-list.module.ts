import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './result-list.component';
import { DialogComponent } from '../dialog/dialog.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ResultListComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    ResultListComponent
  ]
})
export class ResultListModule { }
