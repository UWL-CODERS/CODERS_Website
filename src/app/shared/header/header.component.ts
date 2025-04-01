import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { gsap } from 'gsap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
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
}
