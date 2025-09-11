import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1 } from './service1';

describe('Service1', () => {
  let component: Service1;
  let fixture: ComponentFixture<Service1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
