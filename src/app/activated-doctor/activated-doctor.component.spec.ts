import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedDoctorComponent } from './activated-doctor.component';

describe('ActivatedDoctorComponent', () => {
  let component: ActivatedDoctorComponent;
  let fixture: ComponentFixture<ActivatedDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivatedDoctorComponent]
    });
    fixture = TestBed.createComponent(ActivatedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
