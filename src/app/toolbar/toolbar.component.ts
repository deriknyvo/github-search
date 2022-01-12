import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {

  @Input() title: string = '';
  @Output() changeTheme = new EventEmitter();
  public toggleControl = new FormControl(false);

  constructor(
    private overlay: OverlayContainer,
  ) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-mode';
      const isDarkTheme = darkMode ? darkClassName : '';
      this.changeTheme.emit(isDarkTheme);

      if (darkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

}
