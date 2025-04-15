
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router = inject(Router);
  private appComponent = inject(AppComponent);
  private isAnimating = false; // New flag to track animation state

  email: string = 'info@codersclub.com';
  isMenuOpen = false;
  isMenuClosing = false;

  navigateAndReload(route: string) {
    if (this.isAnimating) return; // Prevent multiple triggers
    this.isAnimating = true; // Lock animation
    this.isMenuOpen = false;
    this.isMenuClosing = true;

    this.appComponent.pageTransition().transitionOut().then(() => {
      this.appComponent.logoTransition()?.startAnimation();
      this.router.navigate([route]).then(() => {
        window.scrollTo(0, 0);
        this.appComponent.pageTransition().transitionIn().then(() => {
          this.isMenuClosing = false;
          this.isAnimating = false; // Release lock after animation
        });
      }).catch(error => {
        console.error('Navigation error:', error);
        this.isMenuClosing = false;
        this.isAnimating = false; // Release lock on error
      });
    });

    gsap.to('.main-nav', {
      opacity: 0,
      duration: 0.4,
    });
  }

  toggleMenu() {
    if (this.isAnimating) return; // Prevent during navigation
    if (this.isMenuOpen) {
      gsap.to('.main-nav', {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          this.isMenuOpen = false;
        },
      });
    } else {
      this.isMenuOpen = true;
      gsap.fromTo('.main-nav', { opacity: 0 }, { opacity: 1, duration: 0.3 });
    }
    this.isMenuClosing = false;
  }

  /**
   * Adds click event listeners to menu links to close the menu when clicked.
   */
  addMenuLinkListeners() {
    const menuLinks = document.querySelectorAll('.main-nav a');
    menuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (this.isMenuOpen) {
          this.toggleMenu();
        }
      });
    });
  }

  /**
   * Initializes the menu by adding event listeners.
   */
  initializeMenu() {
    this.addMenuLinkListeners();
  }

  /**
   * Checks if the given route is the current active route.
   * @param route - The route to check.
   * @returns True if the route is active, false otherwise.
   */
  isActiveRoute(route: string): boolean {
    return this.router.url === route;
  }
}