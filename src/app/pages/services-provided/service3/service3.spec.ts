import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service3 } from './service3';

describe('Service3', () => {
  let component: Service3;
  let fixture: ComponentFixture<Service3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
