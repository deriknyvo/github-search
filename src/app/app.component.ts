import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @HostBinding('class') className = '';
  public toggleControl = new FormControl(false);
  public value = new FormControl();
  public isLoading: boolean = false;
  public isShowContent: boolean = false;

  constructor(
    private overlay: OverlayContainer,
    private dialogService: MatDialog
  ) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-mode';
      this.className = darkMode ? darkClassName : '';

      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  search() {
    this.isLoading = true;
    this.isShowContent = false;

    setTimeout(() => {
      this.isLoading = false;
      this.isShowContent = true;
    }, 2000);
  }

  openDialog() {
    this.dialogService.open(DialogComponent);
  }
}
