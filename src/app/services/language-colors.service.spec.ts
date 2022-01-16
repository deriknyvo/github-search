import { TestBed } from '@angular/core/testing';

import { LanguageColorsService } from './language-colors.service';

describe('LanguageColorsService', () => {
  let service: LanguageColorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageColorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
