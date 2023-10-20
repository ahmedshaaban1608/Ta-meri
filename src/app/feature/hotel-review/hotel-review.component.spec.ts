import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReviewComponent } from './hotel-review.component';

describe('HotelReviewComponent', () => {
  let component: HotelReviewComponent;
  let fixture: ComponentFixture<HotelReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelReviewComponent]
    });
    fixture = TestBed.createComponent(HotelReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
