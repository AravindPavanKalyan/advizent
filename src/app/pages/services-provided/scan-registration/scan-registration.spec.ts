import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanRegistration } from './scan-registration';

describe('ScanRegistration', () => {
  let component: ScanRegistration;
  let fixture: ComponentFixture<ScanRegistration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanRegistration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanRegistration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
