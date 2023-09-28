import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristRegisterComponent } from './tourist-register.component';

describe('TouristRegisterComponent', () => {
  let component: TouristRegisterComponent;
  let fixture: ComponentFixture<TouristRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouristRegisterComponent]
    });
    fixture = TestBed.createComponent(TouristRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
