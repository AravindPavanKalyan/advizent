import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseEngineering } from './reverse-engineering';

describe('ReverseEngineering', () => {
  let component: ReverseEngineering;
  let fixture: ComponentFixture<ReverseEngineering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReverseEngineering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReverseEngineering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
