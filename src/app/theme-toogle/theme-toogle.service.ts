import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeToogleService {

  private theme$ = new BehaviorSubject<string>('');

  constructor() { }

  get theme(): Observable<string> {
    return this.theme$.asObservable();
  }

  changeTheme(theme: string) {
    this.theme$.next(theme);
  }
}
