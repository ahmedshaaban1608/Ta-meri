import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristOwnPageComponent } from './tourist-own-page.component';

describe('TouristOwnPageComponent', () => {
  let component: TouristOwnPageComponent;
  let fixture: ComponentFixture<TouristOwnPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristOwnPageComponent]
    });
    fixture = TestBed.createComponent(TouristOwnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
