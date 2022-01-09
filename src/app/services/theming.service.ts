import { ApplicationRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  public themes = ['dark-theme', 'light-theme'];
  public themeSelected = new BehaviorSubject('light-theme');

  constructor(private appRef: ApplicationRef) {
    const darkModeOn = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (darkModeOn) {
      this.themeSelected.next('dark-theme');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      const turnOn = event.matches;
      this.themeSelected.next(turnOn ? 'dark-theme' : 'light-theme');
      this.appRef.tick();
    });
  }
}
