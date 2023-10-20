import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursitProfileComponent } from './toursit-profile.component';

describe('ToursitProfileComponent', () => {
  let component: ToursitProfileComponent;
  let fixture: ComponentFixture<ToursitProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToursitProfileComponent]
    });
    fixture = TestBed.createComponent(ToursitProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
