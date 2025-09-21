import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCarousel } from './photo-carousel';

describe('PhotoCarousel', () => {
  let component: PhotoCarousel;
  let fixture: ComponentFixture<PhotoCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
