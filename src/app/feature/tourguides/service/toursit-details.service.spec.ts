import { TestBed } from '@angular/core/testing';

import { ToursitDetailsService } from './toursit-details.service';

describe('ToursitDetailsService', () => {
  let service: ToursitDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToursitDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
