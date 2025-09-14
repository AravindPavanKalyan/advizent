import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingServices } from './training-services';

describe('TrainingServices', () => {
  let component: TrainingServices;
  let fixture: ComponentFixture<TrainingServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
