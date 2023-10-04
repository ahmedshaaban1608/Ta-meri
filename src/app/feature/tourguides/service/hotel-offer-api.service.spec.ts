import { TestBed } from '@angular/core/testing';

import { HotelOfferApiService } from './hotel-offer-api.service';

describe('HotelOfferApiService', () => {
  let service: HotelOfferApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelOfferApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
