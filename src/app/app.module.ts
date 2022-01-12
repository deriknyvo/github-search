import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarModule } from './toolbar/toolbar.module';
import { SearchInputModule } from './search-input/search-input.module';
import { ResultListModule } from './result-list/result-list.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    ToolbarModule,
    SearchInputModule,
    ResultListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
