import { Component, OnInit, OnDestroy, PLATFORM_ID, inject, viewChild } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CookiesConsentComponent } from './components/cookies-consent/cookies-consent.component';
import { LogoTransitionComponent } from './components/logo-transition/logo-transition.component';
import { PageTransitionComponent } from './components/page-transition/page-transition.component';
import { PageTransitionService } from './components/page-transition/page-transition.service';
import { gsap } from 'gsap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, CookiesConsentComponent, LogoTransitionComponent, PageTransitionComponent, CommonModule]
})
export class AppComponent implements OnInit, OnDestroy {
    private router = inject(Router);
    private platformId = inject<Object>(PLATFORM_ID);
    private pageTransitionService = inject(PageTransitionService);

    readonly logoTransition = viewChild.required(LogoTransitionComponent);
    readonly pageTransition = viewChild.required(PageTransitionComponent);

    title = 'CODERS Website';
    private routerEventsSubscription: Subscription | null = null;
    private isBrowserNavigating = false;
    showLogoTransition: boolean = false;
    private initialTransitionComplete: boolean = false;

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {

            // Set showLogoTransition to true only on initial load or when navigating to the home page
            this.showLogoTransition = this.router.url === '/home';

            this.routerEventsSubscription = this.router.events.pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            ).subscribe((event: NavigationEnd) => {
                if (!this.isBrowserNavigating) {
                    this.handleNormalNavigation(event);
                } else {
                    this.isBrowserNavigating = false;
                }
            });

            window.addEventListener('popstate', () => {
                this.isBrowserNavigating = true;
                document.body.style.pointerEvents = 'auto';
            });

            // --- WORKAROUND: Force repaint to help with SCSS not applying on first load ---
            setTimeout(() => {
                document.body.offsetHeight; // Accessing offsetHeight forces a repaint
            }, 0);
            // --- END WORKAROUND ---
        }
    }

    private handleNormalNavigation(event: NavigationEnd) {
        // Check if navigating TO the home page
        if (event.url === '/') {
            this.showLogoTransition = true; // Enable the logo transition
        } else {
            this.showLogoTransition = false; // Disable the logo transition
        }

        document.body.style.pointerEvents = 'none';
        document.querySelector('.app')?.classList.add('is-transitioning');

        // Conditionally start the logo transition and page transition
        if (this.showLogoTransition && !this.initialTransitionComplete) {
            this.logoTransition().startAnimation();

            // Wait for the logo transition to complete before running the page transition
            this.logoTransition().logoCubeContainer().nativeElement.addEventListener('transitionend', () => {
                this.initialTransitionComplete = true;
                this.startPageTransition();
            }, { once: true });
        } else {
            this.startPageTransition();
        }
    }

    private startPageTransition() {
        // Delay the transition if it's the initial transition
        const delay = !this.initialTransitionComplete && this.router.url === '/' ? 1250 : 0;

        setTimeout(() => {
            this.pageTransition().transitionIn().then(() => {
                document.body.style.pointerEvents = 'auto';
                document.querySelector('.app')?.classList.remove('is-transitioning');
                gsap.set(".page-transition .block", { visibility: "hidden" });
            });
        }, delay);
    }

    ngOnDestroy() {
        if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
        }
    }
}

/*
  NOTE: For best results with SCSS and caching, ensure you have this in your angular.json:
  "outputHashing": "all"
*/
