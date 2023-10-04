import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelGalleryComponent } from './hotel-gallery.component';

describe('HotelGalleryComponent', () => {
  let component: HotelGalleryComponent;
  let fixture: ComponentFixture<HotelGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelGalleryComponent]
    });
    fixture = TestBed.createComponent(HotelGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
