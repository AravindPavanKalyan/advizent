import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { ProjectsService, Project } from '../projects/projects.service';
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
export class Home implements OnInit, AfterViewInit {
  services = SERVICES;
  @ViewChild('cardCarousel', { static: false, read: ElementRef }) cardCarousel?: ElementRef<HTMLElement>;
  private cardCarouselClickListener?: EventListenerOrEventListenerObject;

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

  // carouselCards populated from ProjectsService
  carouselCards: CarouselCard[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private projectsService: ProjectsService, private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    try {
      const projects: Project[] = this.projectsService.getProjects();
      this.carouselCards = projects.map(p => ({
        id: p.id,
        title: p.title  || 'Untitled',
        description: p.description || '',
        icon: '', // keep blank or map if you have an icon field
        iconType: 'svg' as const,
        backgroundImage: p.image  || 'assets/bim-services-main.jpg.webp'
      }));
      // no document-based redirect; router-based handler attached in ngAfterViewInit
    } catch {
      this.carouselCards = [];
    }
  }

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
