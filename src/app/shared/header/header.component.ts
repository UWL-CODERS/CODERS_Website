import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiscord, faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

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
  faBars = faBars;
  faTimes = faTimes;
  isMenuOpen = false;
  isMenuClosing = false;

  handleBackNavigation() {
    this.navigateAndReload('/home');
  }

  handleForwardNavigation() {
    this.navigateAndReload('/home');
  }

  navigateAndReload(route: string) {
    this.isMenuOpen = false; // Close the menu
    this.isMenuClosing = true; // Set the closing flag

    // Wait for the CSS transition duration (0.3s) before starting the page transition
    setTimeout(() => {
      // Use the transition service to handle the animation before navigation
      // This ensures the transition occurs before page reload
      const transitionOut = () => {
        return new Promise<void>((resolve) => {

          // OPTIONS: https://editor.p5js.org/shibomb/sketches/c4zVvFz8k
          const ease = "power4.inOut";

          gsap.set(".block", { visibility: "visible", scaleY: 0 });

          // Animate all blocks in row 1
          gsap.to(".transition-row.row-1 .block", {
            scaleY: 1,
            duration: 1,
            stagger: {
              each: 0.1,
              from: "end",
            },
            ease: ease,
          });

          // Animate all blocks in row 2
          gsap.to(".transition-row.row-2 .block", {
            scaleY: 1,
            duration: 1,
            stagger: {
              each: 0.1,
              from: "end",
            },
            ease: ease,
            onComplete: resolve,
          });
        });
      };

      transitionOut().then(() => {
        this.router.navigate([route]).then(() => {
          window.location.reload();
          this.isMenuClosing = false; // Reset the closing flag after reload
        });
      });
    }, 300); // Adjust the timeout to match your SCSS transition duration
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen)
    this.isMenuClosing = false; // Reset the closing flag when opening
  }
}