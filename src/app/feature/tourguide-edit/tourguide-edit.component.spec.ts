import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguideEditComponent } from './tourguide-edit.component';

describe('TourguideEditComponent', () => {
  let component: TourguideEditComponent;
  let fixture: ComponentFixture<TourguideEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourguideEditComponent]
    });
    fixture = TestBed.createComponent(TourguideEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
