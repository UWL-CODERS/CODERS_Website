import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-cookies-consent',
  templateUrl: './cookies-consent.component.html',
  styleUrls: ['./cookies-consent.component.scss'],
  imports: [CommonModule],
})
export class CookiesConsentComponent {
  isConsentGiven = false;
  showConsent = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isConsentGiven = localStorage.getItem('cookiesConsent') === 'true';

      if (!this.isConsentGiven) {
        setTimeout(() => {
          this.showConsent = true; // Show the pop-up after 3 seconds
        }, 3000);
      }
    }
  }

  acceptCookies(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cookiesConsent', 'true');
      this.isConsentGiven = true;
      this.showConsent = false; // Hide the pop-up
    }
  }
}