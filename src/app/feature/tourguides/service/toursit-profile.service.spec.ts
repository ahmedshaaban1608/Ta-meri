import { TestBed } from '@angular/core/testing';

import { ToursitProfileService } from './toursit-profile.service';

describe('ToursitProfileService', () => {
  let service: ToursitProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToursitProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
