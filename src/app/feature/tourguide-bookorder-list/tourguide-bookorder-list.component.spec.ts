import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguideBookorderListComponent } from './tourguide-bookorder-list.component';

describe('TourguideBookorderListComponent', () => {
  let component: TourguideBookorderListComponent;
  let fixture: ComponentFixture<TourguideBookorderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourguideBookorderListComponent]
    });
    fixture = TestBed.createComponent(TourguideBookorderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
