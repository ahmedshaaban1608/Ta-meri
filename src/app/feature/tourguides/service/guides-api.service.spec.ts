import { TestBed } from '@angular/core/testing';

import { GuidesApiService } from './guides-api.service';

describe('GuidesApiService', () => {
  let service: GuidesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
