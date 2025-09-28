import { Component, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface CarouselCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconType: 'svg' | 'class';
  backgroundImage?: string;
}

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-carousel.html',
  styleUrls: ['./card-carousel.scss']
})
export class CardCarouselComponent implements OnInit, OnDestroy {
  @Input() cards: CarouselCard[] = [];
  @Input() autoplay: boolean = true;
  @Input() autoplayDelay: number = 4000;
  
  currentIndex = 0;
  isBrowser = false;
  isAutoplayActive = false;
  private autoplayInterval: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser && this.cards.length > 0) {
      console.log('Carousel initialized with', this.cards.length, 'cards');
      // Delay autoplay initialization to ensure DOM is ready
      setTimeout(() => {
        if (this.autoplay) {
          this.startAutoPlay();
        }
      }, 100);
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  getCardTransform(index: number): string {
    const diff = index - this.currentIndex;
    const totalCards = this.cards.length;
    
    // Normalize the difference to handle circular positioning
    let normalizedDiff = diff;
    if (Math.abs(diff) > totalCards / 2) {
      normalizedDiff = diff > 0 ? diff - totalCards : diff + totalCards;
    }
    
    // Calculate position parameters for 3D coverflow effect
    const translateX = normalizedDiff * 250; // Horizontal spacing
    const translateZ = Math.abs(normalizedDiff) * -150; // Depth effect
    const rotateY = normalizedDiff * -35; // Rotation for coverflow
    const scale = normalizedDiff === 0 ? 1 : 0.75; // Active card is larger
    
    return `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
  }

  getCardZIndex(index: number): number {
    const diff = Math.abs(index - this.currentIndex);
    return 100 - diff;
  }

  getSafeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  goToSlide(index: number): void {
    if (!this.isBrowser) return;
    console.log('Going to slide:', index);
    if (index >= 0 && index < this.cards.length) {
      this.currentIndex = index;
      // Restart autoplay when user interacts
      if (this.autoplay) {
        this.restartAutoPlay();
      }
    }
  }

  nextSlide(): void {
    if (!this.isBrowser) return;
    console.log('Next slide - current:', this.currentIndex);
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    console.log('Next slide - new:', this.currentIndex);
  }

  previousSlide(): void {
    if (!this.isBrowser) return;
    console.log('Previous slide - current:', this.currentIndex);
    this.currentIndex = this.currentIndex === 0 
      ? this.cards.length - 1 
      : this.currentIndex - 1;
    console.log('Previous slide - new:', this.currentIndex);
    // Restart autoplay when user interacts
    if (this.autoplay) {
      this.restartAutoPlay();
    }
  }

  private startAutoPlay(): void {
    if (!this.isBrowser || this.cards.length <= 1) {
      return;
    }
    
    this.stopAutoPlay();
    this.isAutoplayActive = true;
    
    // Use setTimeout instead of setInterval for better SSR compatibility
    this.scheduleNextSlide();
  }

  private scheduleNextSlide(): void {
    if (!this.isBrowser || !this.isAutoplayActive) {
      return;
    }
    
    this.autoplayInterval = setTimeout(() => {
      this.nextSlide();
      this.scheduleNextSlide(); // Recursively schedule the next slide
    }, this.autoplayDelay);
  }

  private stopAutoPlay(): void {
    if (this.autoplayInterval) {
      if (this.isBrowser) {
        clearTimeout(this.autoplayInterval);
      }
      this.autoplayInterval = null;
    }
    this.isAutoplayActive = false;
  }

  private restartAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  onMouseEnter(): void {
    if (!this.isBrowser) return;
    if (this.autoplay) {
      this.stopAutoPlay();
    }
  }

  onMouseLeave(): void {
    if (!this.isBrowser) return;
    if (this.autoplay) {
      this.startAutoPlay();
    }
  }

  toggleAutoplay(): void {
    if (!this.isBrowser) return;
    if (this.isAutoplayActive) {
      this.stopAutoPlay();
    } else if (this.autoplay) {
      this.startAutoPlay();
    }
  }
}
