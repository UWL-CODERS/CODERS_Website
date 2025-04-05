
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router = inject(Router);

  email: string = 'info@codersclub.com';
  isMenuOpen = false;
  isMenuClosing = false;

  /**
   * Navigates to a specified route and reloads the page with animations.
   * @param route - The route to navigate to.
   */
  navigateAndReload(route: string) {
    this.isMenuOpen = false;
    this.isMenuClosing = true;

    // Animate menu fade-out using GSAP
    gsap.to('.main-nav', {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        // Perform transition-out animation, navigate, and immediately transition-in
        this.transitionOut().then(() => {
          this.router.navigate([route]).then(() => {
            this.transitionIn().then(() => {
              this.isMenuClosing = false;
            });
          }).catch(error => {
            console.error('Navigation error:', error);
            this.isMenuClosing = false;
          });
        });
      },
    });
  }

  /**
   * Toggles the visibility of the menu with animations.
   */
  toggleMenu() {
    if (this.isMenuOpen) {
      // Animate menu fade-out
      gsap.to('.main-nav', {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          this.isMenuOpen = false;
        },
      });
    } else {
      // Animate menu fade-in
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

  /**
   * Handles the transition-in animation.
   * @returns A promise that resolves when the animation completes.
   */
  private transitionIn() {
    return this.animateTransition(1, 0);
  }

  /**
   * Handles the transition-out animation.
   * @returns A promise that resolves when the animation completes.
   */
  private transitionOut() {
    return this.animateTransition(0, 1);
  }

  /**
   * Animates a transition effect using GSAP.
   * @param fromScale - The starting scale value.
   * @param toScale - The ending scale value.
   * @returns A promise that resolves when the animation completes.
   */
  private animateTransition(fromScale: number, toScale: number) {
    return new Promise<void>((resolve) => {
      const ease = 'power4.inOut'; // Smooth easing for a natural transition
      const duration = 0.6; // Reduced duration for faster transitions

      gsap.set('.block', { visibility: 'visible', scaleY: fromScale });

      // Animate the first row of blocks
      gsap.to('.transition-row.row-1 .block', {
        scaleY: toScale,
        duration: duration,
        stagger: { each: 0.1, from: 'end' }, // Faster stagger
        ease: ease,
      });

      // Animate the second row of blocks and resolve the promise
      gsap.to('.transition-row.row-2 .block', {
        scaleY: toScale,
        duration: duration,
        stagger: { each: 0.1, from: 'end' }, // Faster stagger
        ease: ease,
        onComplete: resolve,
      });
    });
  }
}