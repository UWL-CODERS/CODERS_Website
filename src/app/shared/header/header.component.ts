import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faDiscord, faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { AppComponent } from '../../app.component'; // Import AppComponent

@Component({
  selector: 'app-header',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);
  private appComponent = inject(AppComponent); // Inject AppComponent

  email: string = 'info@codersclub.com';
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen = false;
  isMenuClosing = false;

  /**
   * Navigates to a specified route and reloads the page with animations.
   * @param route - The route to navigate to.
   */
  navigateAndReload(route: string) {
    this.isMenuOpen = false;
    this.isMenuClosing = true;

    this.appComponent.transitionOut().then(() => { // Blocks go down
      this.appComponent.logoTransition()?.startAnimation(); // Start logo animation
      this.router.navigate([route]).then(() => {
        this.appComponent.transitionIn().then(() => { // Blocks come up
          this.isMenuClosing = false;
        });
      }).catch(error => {
        console.error('Navigation error:', error);
        this.isMenuClosing = false;
      });
    });

    gsap.to('.main-nav', {
      opacity: 0,
      duration: 0.4,
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
}