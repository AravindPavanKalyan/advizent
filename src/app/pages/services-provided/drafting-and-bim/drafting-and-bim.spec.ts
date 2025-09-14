import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftingAndBim } from './drafting-and-bim';

describe('DraftingAndBim', () => {
  let component: DraftingAndBim;
  let fixture: ComponentFixture<DraftingAndBim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftingAndBim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraftingAndBim);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
