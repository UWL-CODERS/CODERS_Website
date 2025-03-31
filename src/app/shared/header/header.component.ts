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

  handleBackNavigation() {
    this.navigateAndReload('/home');
  }

  handleForwardNavigation() {
    this.navigateAndReload('/home');
  }

  navigateAndReload(route: string) {
    this.isMenuOpen = false; // Close the menu
    this.isMenuClosing = true; // Set the closing flag

    
    setTimeout(() => {

      // Fade-out animation for the menu
      gsap.to(".main-nav", {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          console.log("Menu fade-out complete");
        },
      });


      const transitionOut = () => {
        return new Promise<void>((resolve) => {
          const ease = "power4.inOut";

          gsap.set(".block", { visibility: "visible", scaleY: 0 });

          gsap.to(".transition-row.row-1 .block", {
            scaleY: 1,
            duration: 1,
            stagger: {
              each: 0.1,
              from: "end",
            },
            ease: ease,
          });

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
