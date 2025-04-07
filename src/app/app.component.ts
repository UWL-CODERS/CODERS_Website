import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, NgZone, inject, viewChild } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';
import { CookiesConsentComponent } from './cookies-consent/cookies-consent.component';
import { LogoTransitionComponent } from './logo-transition/logo-transition.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, CookiesConsentComponent, LogoTransitionComponent]
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    private router = inject(Router);
    private platformId = inject<Object>(PLATFORM_ID);

    readonly logoTransition = viewChild.required(LogoTransitionComponent); // Get a reference to the logo component

    title = 'CODERS Website';
    private routerEventsSubscription: Subscription | null = null;
    private isBrowserNavigating = false; // Flag to track if navigation is due to browser back/forward buttons

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            // Subscribe to router events, specifically NavigationEnd events
            this.routerEventsSubscription = this.router.events.pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            ).subscribe((event: NavigationEnd) => {
                // Check if the navigation was triggered by the browser's back or forward buttons
                if (!this.isBrowserNavigating) {
                    // If not a browser history navigation, handle it as a normal navigation
                    this.handleNormalNavigation(event);
                } else {
                    // If it was a browser history navigation, reset the flag
                    this.isBrowserNavigating = false;
                }
            });

            // Listen for the 'popstate' event, which fires when the user navigates through history
            window.addEventListener('popstate', () => {
                // Set the flag to indicate that the navigation is due to browser back/forward buttons
                this.isBrowserNavigating = true;
                // Immediately re-enable pointer events to allow user interaction
                document.body.style.pointerEvents = 'auto';
                // Note: We do NOT call any transition methods here to prevent transitions on back/forward navigation.
            });
        }
    }

    private handleNormalNavigation(_event: NavigationEnd) {
        // Disable pointer events to prevent interaction during the transition
        document.body.style.pointerEvents = 'none';
        // Add a class to the app container to indicate that a transition is in progress (for potential CSS styling)
        document.querySelector('.app')?.classList.add('is-transitioning');
        // Start the transition in animation
        this.transitionIn().then(() => {
            // After the transition in completes, remove the transitioning class and re-enable pointer events
            document.querySelector('.app')?.classList.remove('is-transitioning');
            document.body.style.pointerEvents = 'auto';
        });
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            Promise.resolve(null).then(() => {
                // Start the logo animation after the view has been initialized
                this.logoTransition()?.startAnimation();
                // Perform the initial transition in animation when the component loads
                this.transitionIn().then(() => {
                    // After the initial transition in, hide the transition blocks
                    gsap.set(".block", { visibility: "hidden" });
                });
                // Set up listeners for router links to handle custom navigation transitions
                this.setupLinkListeners();
            });
        }
    }

    ngOnDestroy() {
        // Unsubscribe from the router events subscription to prevent memory leaks
        if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
        }
    }

    private setupLinkListeners() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                // Get all elements with the 'routerLink' attribute
                const links = document.querySelectorAll('a[routerLink]');
                links.forEach((link) => {
                    // Add a click event listener to each router link
                    link.addEventListener('click', (event) => {
                        // Prevent the default link behavior
                        event.preventDefault();
                        // Get the target route from the 'routerLink' attribute
                        const href = link.getAttribute('routerLink');
                        // Check if the route is valid and not the current route
                        if (href && !href.startsWith('#') && href !== this.router.url) {
                            // Disable pointer events during the transition
                            document.body.style.pointerEvents = 'none';
                            // Perform the transition out and then navigate to the new route
                            this.transitionOutAndIn().then(() => {
                                this.router.navigate([href]).then(() => {
                                    // Re-enable pointer events after navigation completes
                                    document.body.style.pointerEvents = 'auto';
                                }).catch((error) => {
                                    // Log any navigation errors and re-enable pointer events
                                    console.error('Navigation error:', error);
                                    document.body.style.pointerEvents = 'auto';
                                });
                            });
                        }
                    });
                });
            }, 0); // Use a timeout to ensure links are rendered before attaching listeners
        }
    }

    public transitionIn(): Promise<void> {
        return new Promise<void>((resolve) => {
            const delayBeforeTransitionIn = 1000; // Adjust this value (in milliseconds) as needed

            setTimeout(() => {
                this.animateTransition(1, 0).then(resolve);
            }, delayBeforeTransitionIn);
        });
    }

    public transitionOut() {
        return this.animateTransition(0, 1);
    }

    private transitionOutAndIn() {
        return new Promise<void>((resolve) => {
            this.transitionOut().then(() => {
                this.transitionIn().then(resolve);
            });
        });
    }

    private animateTransition(fromScale: number, toScale: number) {
        return new Promise<void>((resolve) => {
            const ease = 'power4.inOut'; // Smooth easing for a natural transition
            const duration = 0.6; // Reduced duration for faster transitions

            gsap.set('.block', { visibility: 'visible', scaleY: fromScale });

            // Animate the first row of blocks
            gsap.to('.transition-row.row-1 .block', {
                scaleY: toScale,
                duration: duration,
                stagger: { each: 0.1, from: 'end' }, // Faster stagger
                ease: ease,
            });

            // Animate the second row of blocks and resolve the promise
            gsap.to('.transition-row.row-2 .block', {
                scaleY: toScale,
                duration: duration,
                stagger: { each: 0.1, from: 'end' }, // Faster stagger
                ease: ease,
                onComplete: resolve,
            });
        });
    }
}