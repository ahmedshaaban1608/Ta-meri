import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tourguideGuard } from './tourguide.guard';

describe('tourguideGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tourguideGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
