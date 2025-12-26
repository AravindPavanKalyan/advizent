import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, OnDestroy, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SERVICES } from './../home/services-data';
import { ProjectsService, Project } from './../projects/projects.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About implements OnInit, AfterViewInit, OnDestroy {
  // expose imported services to the template for *ngFor
  services = SERVICES;

  // projects carousel data
  projects: Project[] = [];

  // carousel DOM ref (matches template #carousel)
  @ViewChild('carousel', { static: false }) carousel?: ElementRef<HTMLElement>;

  // carousel runtime state (copied/adapted from project-details)
  private intervalId?: any;
  private stepMs = 2000;
  private paused = false;
  private mouseEnterListener?: () => void;
  private mouseLeaveListener?: () => void;
  private isBrowser = false;
  private shouldStartCarousel = false;
  private currentIndex = 0;

  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // synchronous retrieval consistent with other code in the app
    try {
      this.projects = this.projectsService.getProjects() || [];
    } catch {
      this.projects = [];
    }

    if (this.isBrowser) {
      this.shouldStartCarousel = this.projects.length > 0;
    }
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const host = this.carousel?.nativeElement;
    if (host) {
      this.mouseEnterListener = this.renderer.listen(host, 'mouseenter', () => this.pauseCarousel());
      this.mouseLeaveListener = this.renderer.listen(host, 'mouseleave', () => this.resumeCarousel());
    }

    if (this.shouldStartCarousel) {
      setTimeout(() => this.startCarousel(), 50);
      this.shouldStartCarousel = false;
    }
  }

  ngOnDestroy(): void {
    this.stopCarousel();
    if (this.mouseEnterListener) this.mouseEnterListener();
    if (this.mouseLeaveListener) this.mouseLeaveListener();
  }

  navigateToProject(projectId: string) {
    this.stopCarousel();
    this.router.navigate(['/project', projectId]);
  }

  // same scrolling implementation used in project-details
  private startCarousel() {
    if (!this.isBrowser) return;
    this.stopCarousel();

    const container = this.carousel?.nativeElement;
    if (!container) return;

    const items = Array.from(container.querySelectorAll('.carousel-item')) as HTMLElement[];
    const n = items.length;
    if (!n) return;

    this.stepMs = window.innerWidth <= 640 ? 3000 : 1800;
    this.currentIndex = 0;

    const centerElementInContainer = (el: HTMLElement) => {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const relativeLeft = elRect.left - containerRect.left + container.scrollLeft;
      const targetLeft = Math.max(0, relativeLeft - (container.clientWidth - el.clientWidth) / 2);
      container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    };

    centerElementInContainer(items[0]);

    this.intervalId = setInterval(() => {
      if (this.paused) return;
      this.currentIndex = (this.currentIndex + 1) % n;
      const el = items[this.currentIndex];
      if (el) centerElementInContainer(el);
    }, this.stepMs);
  }

  private stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  pauseCarousel() { this.paused = true; }
  resumeCarousel() { this.paused = false; }
}
