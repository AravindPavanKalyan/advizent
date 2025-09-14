import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDCadModels } from './three-d-cad-models';

describe('ThreeDCadModels', () => {
  let component: ThreeDCadModels;
  let fixture: ComponentFixture<ThreeDCadModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeDCadModels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDCadModels);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
