import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardCarouselComponent, CarouselCard } from './card-carousel';

describe('CardCarouselComponent', () => {
  let component: CardCarouselComponent;
  let fixture: ComponentFixture<CardCarouselComponent>;

  const mockCards: CarouselCard[] = [
    { 
      id: '1', 
      title: 'Card 1', 
      description: 'Description 1', 
      icon: '<svg><path/></svg>',
      iconType: 'svg' as const
    },
    { 
      id: '2', 
      title: 'Card 2', 
      description: 'Description 2', 
      icon: '<svg><path/></svg>',
      iconType: 'svg' as const
    },
    { 
      id: '3', 
      title: 'Card 3', 
      description: 'Description 3', 
      icon: 'icon-class',
      iconType: 'class' as const
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCarouselComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(CardCarouselComponent);
    component = fixture.componentInstance;
    component.cards = mockCards;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with first slide', () => {
    expect(component.currentIndex).toBe(0);
  });

  it('should go to specific slide', () => {
    component.goToSlide(1);
    expect(component.currentIndex).toBe(1);
  });

  it('should go to next slide', () => {
    component.nextSlide();
    expect(component.currentIndex).toBe(1);
  });

  it('should go to previous slide from first slide (wrap around)', () => {
    component.previousSlide();
    expect(component.currentIndex).toBe(2);
  });

  it('should wrap around to first slide when going next from last slide', () => {
    component.currentIndex = 2;
    component.nextSlide();
    expect(component.currentIndex).toBe(0);
  });

  it('should generate correct transform for cards', () => {
    const transform = component.getCardTransform(1);
    expect(transform).toContain('translateX(250px)');
    expect(transform).toContain('rotateY(-35deg)');
  });

  it('should return correct z-index for cards', () => {
    expect(component.getCardZIndex(0)).toBe(100);
    expect(component.getCardZIndex(1)).toBe(99);
    expect(component.getCardZIndex(2)).toBe(98);
  });
});
