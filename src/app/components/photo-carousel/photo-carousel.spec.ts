import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PhotoCarouselComponent } from './photo-carousel';

describe('PhotoCarouselComponent', () => {
  let component: PhotoCarouselComponent;
  let fixture: ComponentFixture<PhotoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoCarouselComponent, RouterTestingModule],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with first image and zero progress', () => {
    expect(component.currentImageIndex).toBe(0);
    expect(component.progressWidth).toBe(0);
  });

  it('should navigate to next image and reset progress', () => {
    const initialIndex = component.currentImageIndex;
    spyOn(component, 'resetProgressBar');
    component.nextImage();
    expect(component.currentImageIndex).toBe((initialIndex + 1) % component.images.length);
    expect(component.resetProgressBar).toHaveBeenCalled();
  });

  it('should navigate to previous image and reset progress', () => {
    component.currentImageIndex = 1; // Set to second image
    spyOn(component, 'resetProgressBar');
    component.previousImage();
    expect(component.currentImageIndex).toBe(0);
    expect(component.resetProgressBar).toHaveBeenCalled();
  });

  it('should go to specific image index', () => {
    component.goToImage(2);
    expect(component.currentImageIndex).toBe(2);
  });

  it('should have autoplay and progress intervals set on init', () => {
    expect(component.autoPlayInterval).toBeTruthy();
    expect(component.progressInterval).toBeTruthy();
  });

  it('should stop both autoplay and progress on mouse enter', () => {
    spyOn(component, 'stopAutoPlay');
    component.onMouseEnter();
    expect(component.stopAutoPlay).toHaveBeenCalled();
  });

  it('should start both autoplay and progress on mouse leave', () => {
    spyOn(component, 'startAutoPlay');
    component.onMouseLeave();
    expect(component.startAutoPlay).toHaveBeenCalled();
  });

  it('should reset progress bar when starting', () => {
    spyOn(component, 'startProgressBar');
    spyOn(component, 'stopProgressBar');
    component.resetProgressBar();
    expect(component.stopProgressBar).toHaveBeenCalled();
    expect(component.progressWidth).toBe(0);
    expect(component.startProgressBar).toHaveBeenCalled();
  });
});
