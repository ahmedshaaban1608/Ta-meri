import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursitDetailsComponent } from './toursit-details.component';

describe('ToursitDetailsComponent', () => {
  let component: ToursitDetailsComponent;
  let fixture: ComponentFixture<ToursitDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToursitDetailsComponent]
    });
    fixture = TestBed.createComponent(ToursitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
