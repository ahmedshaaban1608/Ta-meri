import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourguidesComponent } from './tourguides.component';

describe('TourguidesComponent', () => {
  let component: TourguidesComponent;
  let fixture: ComponentFixture<TourguidesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TourguidesComponent]
    });
    fixture = TestBed.createComponent(TourguidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
