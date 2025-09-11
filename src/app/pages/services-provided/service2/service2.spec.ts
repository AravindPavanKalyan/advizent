import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2 } from './service2';

describe('Service2', () => {
  let component: Service2;
  let fixture: ComponentFixture<Service2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Service2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
