import { OverlayContainer } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeToogleService } from './theme-toogle.service';

@Component({
  selector: 'app-theme-toogle',
  templateUrl: './theme-toogle.component.html',
  styleUrls: ['./theme-toogle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToogleComponent implements OnInit {

  public toggleControl = new FormControl(false);

  constructor(
    private overlay: OverlayContainer,
    private themeService: ThemeToogleService
  ) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((isDarkMode) => {
      const darkClassName = 'dark-mode';
      const theme = isDarkMode ? darkClassName : '';

      this.themeService.changeTheme(theme);

      if (isDarkMode) {
        this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

}
