import { TestBed } from '@angular/core/testing';

import { ThemeToogleService } from './theme-toogle.service';

describe('ThemeToogleService', () => {
  let service: ThemeToogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeToogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
