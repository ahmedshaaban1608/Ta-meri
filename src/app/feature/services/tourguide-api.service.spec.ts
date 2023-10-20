import { TestBed } from '@angular/core/testing';

import { TourguideApiService } from './tourguide-api.service';

describe('TourguideApiService', () => {
  let service: TourguideApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TourguideApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
