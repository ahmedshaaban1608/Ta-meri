import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguideProfileComponent } from './tourguide-profile.component';

describe('TourguideProfileComponent', () => {
  let component: TourguideProfileComponent;
  let fixture: ComponentFixture<TourguideProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourguideProfileComponent]
    });
    fixture = TestBed.createComponent(TourguideProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
