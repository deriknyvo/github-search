import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ThemeToogleModule } from '../theme-toogle/theme-toogle.module';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    ThemeToogleModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
