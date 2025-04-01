import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { faDiscord, faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule], // Add CommonModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private router = inject(Router);

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

  private ease = "bounce.out"; // Match the easing option from app.component.ts

  handleNavigation(route: string) {
    this.navigateWithTransition(route);
  }

  private navigateWithTransition(route: string) {
    this.transitionOut().then(() => {
      this.router.navigate([route]).then(() => {
        this.transitionIn();
      });
    });
  }

  private transitionOut() {
    return this.animateTransition(0, 1);
  }

  private transitionIn() {
    return this.animateTransition(1, 0);
  }

  private animateTransition(fromScale: number, toScale: number) {
    return new Promise<void>((resolve) => {
      gsap.set(".block", { visibility: "visible", scaleY: fromScale });

      const duration = 0.7; // Unified duration for both transitions

      // Animate blocks in row 1
      gsap.to(".transition-row.row-1 .block", {
        scaleY: toScale,
        duration: duration,
        stagger: {
          each: 0.1,
          from: "start",
        },
        ease: this.ease, // Use bounce easing for all transitions
      });

      // Animate blocks in row 2
      gsap.to(".transition-row.row-2 .block", {
        scaleY: toScale,
        duration: duration,
        stagger: {
          each: 0.1,
          from: "start",
        },
        ease: this.ease, // Use bounce easing for all transitions
        onComplete: resolve,
      });
    });
  }
  toggleMenu() {
    if (this.isMenuOpen) {
      // Menu is currently open -> Apply fade-out animation
      gsap.to(".main-nav", {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          this.isMenuOpen = false; // Close the menu after animation completes
          console.log("Menu closed");
        },
      });
    } else {
      // Menu is currently closed -> Apply fade-in animation
      this.isMenuOpen = true; // Open the menu immediately
      gsap.fromTo(
        ".main-nav",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      console.log("Menu opened");
    }

    this.isMenuClosing = false; // Reset the closing flag when toggling
  }
}
