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

    return {
      label: language,
      styles: languageColors[lang]
    }
  }
}
