import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiscord, faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private router = inject(Router);
  
  email: string = 'info@codersclub.com';
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  navigateAndReload(route: string) {
    const transitionOut = () => {
      return new Promise<void>((resolve) => {
        const ease = "power4.inOut"

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
      });
    });
  }
}
