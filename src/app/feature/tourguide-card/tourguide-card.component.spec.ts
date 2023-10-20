import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguideCardComponent } from './tourguide-card.component';

describe('TourguideCardComponent', () => {
  let component: TourguideCardComponent;
  let fixture: ComponentFixture<TourguideCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourguideCardComponent]
    });
    fixture = TestBed.createComponent(TourguideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
