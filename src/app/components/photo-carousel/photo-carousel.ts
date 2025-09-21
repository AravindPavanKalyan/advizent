import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-photo-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './photo-carousel.html',
  styleUrl: './photo-carousel.scss'
})
export class PhotoCarouselComponent implements OnInit, OnDestroy {
  currentImageIndex = 0;
  autoPlayInterval: any;
  progressInterval: any;
  autoPlayDuration = 10000; // 10 seconds for image display
  blinkDuration = 600; // 0.6 seconds for blink effect
  totalCycleDuration = this.autoPlayDuration + this.blinkDuration; // 5.6 seconds total
  progressWidth = 0; // Progress bar width percentage
  isTransitioning = false; // Track transition state
  nextImageIndex = 0; // Track next image for dissolve effect

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Sample images - you can replace these with your actual images
  images = [
    {
      url: '/assets/bim-services-main.jpg.webp',
      alt: 'BIM Services',
      title: 'Advanced BIM Services',
      description: 'Transform your construction projects with our comprehensive Building Information Modeling solutions. We deliver precise 3D models and detailed technical documentation.',
      buttonText: 'Explore BIM Services',
      buttonLink: '/services-provided/scan-to-bim'
    },
    {
      url: '/assets/4d-bim-services-main.jpg.webp',
      alt: '3D Laser Scanning',
      title: '3D Laser Scanning',
      description: 'Capture reality with millimeter precision using state-of-the-art laser scanning technology. Perfect for as-built documentation and reverse engineering.',
      buttonText: 'Learn About Scanning',
      buttonLink: '/services-provided/three-d-laser-scanning'
    },
    {
      url: '/assets/bim-services-main.jpg.webp',
      alt: 'CAD Modeling',
      title: 'Precision CAD Models',
      description: 'From concept to completion, our expert team creates detailed CAD models and technical drawings that meet industry standards and project requirements.',
      buttonText: 'View CAD Services',
      buttonLink: '/services-provided/three-d-cad-models'
    },
    {
      url: '/assets/4d-bim-services-main.jpg.webp',
      alt: 'Engineering Solutions',
      title: 'Professional Engineering',
      description: 'Comprehensive engineering consulting services tailored to your specific needs. We bring expertise, innovation, and reliability to every project.',
      buttonText: 'Contact Our Team',
      buttonLink: '/contact'
    }
  ];

  ngOnInit() {
    // Only start autoplay in the browser environment
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
    this.stopProgressBar();
  }

  startAutoPlay() {
    // Only use progress bar timing in browser environment
    if (isPlatformBrowser(this.platformId)) {
      // Start the first progress bar - it will handle all subsequent timing
      this.startProgressBar();
    }
  }

  stopAutoPlay() {
    // Just stop the progress bar, which controls everything
    this.stopProgressBar();
  }

  startProgressBar() {
    if (isPlatformBrowser(this.platformId)) {
      this.progressWidth = 0;
      const updateInterval = 50; // Update every 50ms for smooth animation
      const totalUpdates = this.autoPlayDuration / updateInterval; // Total number of updates
      const increment = 100 / totalUpdates; // Exact increment per update
      
      this.progressInterval = setInterval(() => {
        this.progressWidth += increment;
        
        // Check if we've reached or exceeded 100%
        if (this.progressWidth >= 100) { // Use exactly 100% to trigger
          this.progressWidth = 100;
          this.stopProgressBar();
          // Immediately trigger image change when progress bar completes
          this.triggerDissolveTransition(() => {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
          });
        }
      }, updateInterval);
    }
  }

  stopProgressBar() {
    if (isPlatformBrowser(this.platformId) && this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  resetProgressBar() {
    this.stopProgressBar();
    this.progressWidth = 0;
    this.startProgressBar();
  }

  nextImage() {
    if (this.isTransitioning) return; // Prevent multiple transitions
    
    this.stopProgressBar(); // Stop current progress
    this.triggerDissolveTransition(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    });
  }

  previousImage() {
    if (this.isTransitioning) return; // Prevent multiple transitions
    
    this.stopProgressBar(); // Stop current progress
    this.triggerDissolveTransition(() => {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.images.length - 1 
        : this.currentImageIndex - 1;
    });
  }

  goToImage(index: number) {
    if (this.isTransitioning || index === this.currentImageIndex) return; // Prevent multiple transitions
    
    this.stopProgressBar(); // Stop current progress
    this.triggerDissolveTransition(() => {
      this.currentImageIndex = index;
    });
  }

  // Trigger dissolve effect during transition
  triggerDissolveTransition(callback: () => void) {
    if (!isPlatformBrowser(this.platformId)) {
      callback();
      if (this.progressInterval === null) { // Only start if not already running
        this.startProgressBar();
      }
      return;
    }

    this.isTransitioning = true;
    
    // Calculate next image index for the dissolve effect
    if (callback.toString().includes('currentImageIndex + 1')) {
      this.nextImageIndex = (this.currentImageIndex + 1) % this.images.length;
    } else if (callback.toString().includes('currentImageIndex === 0')) {
      this.nextImageIndex = this.currentImageIndex === 0 ? this.images.length - 1 : this.currentImageIndex - 1;
    } else {
      // For goToImage, we'll set nextImageIndex in the callback
      callback();
      this.nextImageIndex = this.currentImageIndex;
    }
    
    // Update current image index immediately and start new progress bar
    if (!callback.toString().includes('goToImage')) {
      callback();
    }
    
    // Start new progress bar immediately when transition begins
    this.progressWidth = 0;
    this.startProgressBar();
    
    // Reset transition state after dissolve completes
    setTimeout(() => {
      this.isTransitioning = false;
    }, 800); // Dissolve duration
  }

  // Pause autoplay on hover (only in browser)
  onMouseEnter() {
    if (isPlatformBrowser(this.platformId)) {
      this.stopAutoPlay();
    }
  }

  // Resume autoplay when mouse leaves (only in browser)
  onMouseLeave() {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoPlay();
    }
  }
}
