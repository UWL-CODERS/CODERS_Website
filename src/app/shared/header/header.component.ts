
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
  
  handleBackNavigation() {
    // Navigate to home or handle as needed
    this.navigateAndReload('/home');
  }

  handleForwardNavigation() {
    // Navigate to home or handle as needed
    this.navigateAndReload('/home');
  }

  navigateAndReload(route: string) {
    // Use the transition service to handle the animation before navigation
    // This ensures the transition occurs before page reload
    const transitionOut = () => {
      return new Promise<void>((resolve) => {
        
        // OPTIONS: https://editor.p5js.org/shibomb/sketches/c4zVvFz8k
        const ease = "power4.inOut"

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
      });
    });
  }
}
