import { TestBed } from '@angular/core/testing';

import { FeedbackHotelService } from './feedback-hotel.service';

describe('FeedbackHotelService', () => {
  let service: FeedbackHotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackHotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
