import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDLaserScanning } from './three-d-laser-scanning';

describe('ThreeDLaserScanning', () => {
  let component: ThreeDLaserScanning;
  let fixture: ComponentFixture<ThreeDLaserScanning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDLaserScanning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDLaserScanning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
