import { Injectable } from '@angular/core';
import { languageColors } from '../languages';

@Injectable({
  providedIn: 'root'
})
export class LanguageColorsService {

  constructor() { }

  getLanguageStyle(language: string) {
    if (!language) {
      return language;
    }

    const lang = language.replace(' ', '').toLowerCase();

    if (!languageColors[lang]) {
      return {
        label: language,
        styles: {
          backgroundColor: '#009688',
          color: 'white'
        }
      }
    }

    return {
      label: language,
      styles: languageColors[lang]
    }
  }
}
