import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultListComponent } from './result-list.component';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { DialogRepositoryComponent } from '../dialog-repository/dialog-repository.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    ResultListComponent,
    DialogUserComponent,
    DialogRepositoryComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatCardModule,
    MatTooltipModule
  ],
  exports: [
    ResultListComponent
  ]
})
export class ResultListModule { }
