import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourGuideRegisterComponent } from './tour-guide-register.component';

describe('TourGuideRegisterComponent', () => {
  let component: TourGuideRegisterComponent;
  let fixture: ComponentFixture<TourGuideRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourGuideRegisterComponent]
    });
    fixture = TestBed.createComponent(TourGuideRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
