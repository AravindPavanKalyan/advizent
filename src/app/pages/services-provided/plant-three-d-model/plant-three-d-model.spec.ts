import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantThreeDModel } from './plant-three-d-model';

describe('PlantThreeDModel', () => {
  let component: PlantThreeDModel;
  let fixture: ComponentFixture<PlantThreeDModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantThreeDModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantThreeDModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
