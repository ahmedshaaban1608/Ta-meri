import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguideOwnPageComponent } from './tourguide-own-page.component';

describe('TourguideOwnPageComponent', () => {
  let component: TourguideOwnPageComponent;
  let fixture: ComponentFixture<TourguideOwnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourguideOwnPageComponent]
    });
    fixture = TestBed.createComponent(TourguideOwnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
