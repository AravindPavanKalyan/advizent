import { Component, OnDestroy, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectsService, Project } from '../projects.service';
import { isPlatformBrowser } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, GalleriaModule],
  templateUrl: './project-details.html',
  styleUrls: ['./project-detail.scss',  '../projects.scss']
})
export class ProjectDetail implements OnInit, AfterViewInit, OnDestroy {
  project?: Project;
  relatedProjects: Project[] = [];
  private sub?: Subscription;

  // new: reference to the scroll container
  @ViewChild('carousel', { static: false }) carousel?: ElementRef<HTMLElement>;

  private intervalId?: any;
  private stepMs = 2000;
  private paused = false;
  private mouseEnterListener?: () => void;
  private mouseLeaveListener?: () => void;
  private isBrowser = false;
  private shouldStartCarousel = false;
  private currentIndex = 0;

  // gallery state for the PrimeNG Galleria used in the template
  displayCustom: boolean = false;
  activeIndex: number = 0;
  responsiveOptions: any[] = [
    { breakpoint: '1024px', numVisible: 5 },
    { breakpoint: '768px', numVisible: 3 },
    { breakpoint: '560px', numVisible: 1 }
  ];

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.sub = this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.project = id ? this.projectsService.getProjectById(id) : undefined;

      if (this.project) {
        const all = this.projectsService.getProjects();
        this.relatedProjects = all.filter(p =>
          p.id !== this.project!.id &&
          p.services.some(s => this.project!.services.includes(s))
        );
      } else {
        this.relatedProjects = [];
      }

      if (this.isBrowser) {
        // schedule start after view init
        this.shouldStartCarousel = this.relatedProjects.length > 0;
      }
    });
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    // attach hover listeners on the container (defensive)
    const host = this.carousel?.nativeElement;
    if (host) {
      this.mouseEnterListener = this.renderer.listen(host, 'mouseenter', () => this.pauseCarousel());
      this.mouseLeaveListener = this.renderer.listen(host, 'mouseleave', () => this.resumeCarousel());
    }

    if (this.shouldStartCarousel) {
      // start once items are rendered
      setTimeout(() => this.startCarousel(), 50);
      this.shouldStartCarousel = false;
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.stopCarousel();
    if (this.mouseEnterListener) this.mouseEnterListener();
    if (this.mouseLeaveListener) this.mouseLeaveListener();
  }

  navigateToProject(projectId: string) {
    this.stopCarousel();
    this.router.navigate(['/project', projectId]);
  }

  goBack() { history.back(); }

  // new: simple index-driven scroller using element.scrollIntoView for centering
  private startCarousel() {
    if (!this.isBrowser) return;
    this.stopCarousel();

    const container = this.carousel?.nativeElement;
    if (!container) return;

    // find current items inside container
    const items = Array.from(container.querySelectorAll('.carousel-item')) as HTMLElement[];
    const n = items.length;
    if (!n) return;

    // step duration: longer on mobile
    this.stepMs = window.innerWidth <= 640 ? 3000 : 1800;
    this.currentIndex = 0;

    // ensure first item is centered WITHOUT causing page scroll
    const centerElementInContainer = (el: HTMLElement) => {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const relativeLeft = elRect.left - containerRect.left + container.scrollLeft;
      const targetLeft = Math.max(0, relativeLeft - (container.clientWidth - el.clientWidth) / 2);
      // smooth scroll only the container (no page jump)
      container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    };

    centerElementInContainer(items[0]);

    this.intervalId = setInterval(() => {
      if (this.paused) return;
      this.currentIndex = (this.currentIndex + 1) % n;
      const el = items[this.currentIndex];
      if (el) {
        centerElementInContainer(el);
      }
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

  // open gallery at index
  openGalleria(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
