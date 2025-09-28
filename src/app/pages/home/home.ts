import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SERVICES } from './services-data';
import { PhotoCarouselComponent } from '../../components/photo-carousel/photo-carousel';
import { CardCarouselComponent, CarouselCard, BgImageCardsComponent, BgImageCard } from '../../shared/components';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, BgImageCardsComponent, PhotoCarouselComponent, CardCarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  services = SERVICES;

  servicesBgCards: BgImageCard[] = [
  {
    id: 'bim-modeling',
    title: 'BIM Modeling',
    description: 'Advanced Building Information Modeling services for comprehensive project visualization and coordination.',
    backgroundImage: 'assets/bim-services-main.jpg.webp', // Use your existing image
    buttonText: 'Explore BIM',
    buttonRoute: '/services/bim-modeling'
  },
  {
    id: 'laser-scanning',
    title: '3D Laser Scanning',
    description: 'Precision 3D laser scanning technology for accurate as-built documentation and reverse engineering.',
    backgroundImage: 'assets/4d-bim-services-main.jpg.webp', // Use your existing image
    buttonText: 'Learn More',
    buttonRoute: '/services/laser-scanning'
  },
  {
    id: 'cad-drafting',
    title: 'CAD Drafting',
    description: 'Professional CAD drafting and design services for architectural, structural, and MEP drawings.',
    backgroundImage: 'assets/bim-services-main.jpg.webp', // Reuse for now
    buttonText: 'View Details',
    buttonRoute: '/services/cad-drafting'
  },
  {
    id: 'structural-detailing',
    title: 'Structural Detailing',
    description: 'Detailed structural drawings and shop drawings for steel, concrete, and timber structures.',
    backgroundImage: 'assets/4d-bim-services-main.jpg.webp', // Reuse for now
    buttonText: 'Discover',
    buttonRoute: '/services/structural-detailing'
  },
  {
    id: 'architectural-rendering',
    title: 'Architectural Rendering',
    description: 'Photorealistic 3D renderings and visualizations to bring your architectural designs to life.',
    backgroundImage: 'assets/bim-services-main.jpg.webp', // Reuse for now
    buttonText: 'See Portfolio',
    buttonRoute: '/services/architectural-rendering'
  },
  {
    id: 'project-coordination',
    title: 'Project Coordination',
    description: 'Comprehensive project coordination and clash detection services using advanced BIM workflows.',
    backgroundImage: 'assets/4d-bim-services-main.jpg.webp', // Reuse for now
    buttonText: 'Learn How',
    buttonRoute: '/services/project-coordination'
  }
];

  // Sample carousel data - you can replace this with your own data
  carouselCards: CarouselCard[] = [
    {
      id: '1',
      title: 'BIM Services',
      description: 'Comprehensive Building Information Modeling solutions for your construction projects.',
      icon: '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>',
      iconType: 'svg' as const,
      backgroundImage: 'assets/bim-services-main.jpg.webp'
    },
    {
      id: '2',
      title: '3D Laser Scanning',
      description: 'Precise 3D measurements and detailed point cloud data capture for accurate modeling.',
      icon: '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>',
      iconType: 'svg' as const,
      backgroundImage: 'assets/4d-bim-services-main.jpg.webp'
    },
    {
      id: '3',
      title: 'CAD Modeling',
      description: 'Professional Computer-Aided Design services for engineering and architectural projects.',
      icon: '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" /></svg>',
      iconType: 'svg' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      title: 'Project Management',
      description: 'End-to-end project coordination and management services for seamless execution.',
      icon: '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
      iconType: 'svg' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      title: 'Technical Consulting',
      description: 'Expert technical consulting and advisory services for complex engineering challenges.',
      icon: '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" /></svg>',
      iconType: 'svg' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      title: 'Quality Assurance',
      description: 'Comprehensive quality control and assurance processes for project excellence.',
      icon: '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>',
      iconType: 'svg' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '7',
      title: 'Training Services',
      description: 'Professional training programs for BIM, CAD, and advanced engineering software.',
      icon: '<svg class="w-12 h-12" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>',
      iconType: 'svg' as const,
      backgroundImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Only run on browser, not during SSR
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    
    // Only apply height calculations on non-mobile devices
    if (this.isMobileDevice()) {
      return;
    }
    this.setOptimalImageHeight();
  }

  private isMobileDevice(): boolean {
    // Return false during SSR, will be checked again on browser
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return window.innerWidth <= 767;
  }

  private setOptimalImageHeight() {
    const imageContainers = document.querySelectorAll('.service-image-container');
    const images = document.querySelectorAll('.service-image') as NodeListOf<HTMLImageElement>;
    
    let imagesLoaded = 0;
    const totalImages = images.length;
    
    if (totalImages === 0) return;

    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          this.calculateOptimalImageHeight(imageContainers, images);
        }
      } else {
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === totalImages) {
            this.calculateOptimalImageHeight(imageContainers, images);
          }
        };
      }
    });
  }

  private calculateOptimalImageHeight(containers: NodeListOf<Element>, images: NodeListOf<HTMLImageElement>) {
    const containerWidth = containers[0]?.clientWidth || 280;
    let minHeight = Infinity;

    images.forEach((img) => {
      const aspectRatio = img.naturalHeight / img.naturalWidth;
      const calculatedHeight = containerWidth * aspectRatio;
      minHeight = Math.min(minHeight, calculatedHeight);
    });

    // Apply reasonable bounds
    minHeight = Math.max(80, Math.min(200, minHeight));

    // Step 1: Set all image container heights
    containers.forEach((container) => {
      (container as HTMLElement).style.height = `${minHeight}px`;
    });

    // Step 2: Use requestAnimationFrame to ensure layout has updated
    requestAnimationFrame(() => {
      this.setUniformCardHeight();
    });
  }

  private setUniformCardHeight() {
    const serviceCards = document.querySelectorAll('.service-card') as NodeListOf<HTMLElement>;
    
    if (serviceCards.length === 0) return;

    // Reset any previous height settings to get natural heights
    serviceCards.forEach(card => {
      card.style.height = 'auto';
    });

    // Use requestAnimationFrame to ensure the height reset has been applied
    requestAnimationFrame(() => {
      let maxHeight = 0;

      // Find the tallest card
      serviceCards.forEach(card => {
        const cardHeight = card.offsetHeight;
        maxHeight = Math.max(maxHeight, cardHeight);
      });

      // Apply the maximum height to all cards
      serviceCards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    });
  }
}
