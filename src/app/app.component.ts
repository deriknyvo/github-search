import { Component, HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { Filter } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @HostBinding('class') className = '';
  public isLoading: boolean = false;
  public isShowResult: boolean = false;
  private word: string = '';
  private filters: Filter[] = [];

  constructor(
    private dialogService: MatDialog
  ) { }

  ngOnInit(): void { }

  toogleTheme(value: string) {
    this.className = value;
  }

  search(word: string) {
    this.word = word;
  }

  toggleFilters(filters: Filter[]) {
    this.filters = filters;
  }

  // search() {
  //   this.isLoading = true;
  //   this.isShowContent = false;

  //   setTimeout(() => {
  //     this.isLoading = false;
  //     this.isShowContent = true;
  //   }, 2000);
  // }

  openDialog() {
    this.dialogService.open(DialogComponent);
  }
}
