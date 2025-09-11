
import { Component, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnDestroy {
  isMobileMenuOpen = false;
  isLargeScreen = true;
  isMobileMenuClosing = false;
  isServicesDropdownOpen = false;

  private isBrowser: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.breakpointObserver.observe([
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((result: { matches: boolean }) => {
      this.isLargeScreen = result.matches;
    });
    // Only add event listener in browser
    if (this.isBrowser) {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }

  openMobileMenu() {
    this.isMobileMenuOpen = true;
    this.isMobileMenuClosing = false;
  }

  closeMobileMenu() {
    this.isMobileMenuClosing = true;
    setTimeout(() => {
      this.isMobileMenuOpen = false;
      this.isMobileMenuClosing = false;
    }, 300); // match animation duration
  }

  handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.group')) {
      this.isServicesDropdownOpen = false;
    }
  };

  ngOnDestroy() {
    if (this.isBrowser) {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }
}
