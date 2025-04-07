import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDiscord, faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from '../../app.component'; // Import AppComponent

@Component({
  selector: 'app-footer',
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private router = inject(Router);
  private appComponent = inject(AppComponent); // Inject AppComponent

  email: string = 'info@codersclub.com';
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faGithub = faGithub;
  faEnvelope = faEnvelope;

  navigateAndReload(route: string) {
    const transitionOutPromise = this.appComponent.transitionOut(); // Blocks go down

    transitionOutPromise.then(() => {
      this.appComponent.logoTransition()?.startAnimation(); // Start logo animation
      this.router.navigate([route]).then(() => {
        this.appComponent.transitionIn(); // Blocks come up
      });
    });
  }
}