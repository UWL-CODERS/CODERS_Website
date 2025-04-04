import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, NgZone, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';
import { CookiesConsentComponent } from './cookies-consent/cookies-consent.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, CookiesConsentComponent],
    standalone: true,
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    private router = inject(Router);
    private platformId = inject<Object>(PLATFORM_ID);
    private ngZone = inject(NgZone);

    title = 'CODERS Website';
    private ease = "power4.inOut";
    private routerEventsSubscription: Subscription | null = null;
    private lastNavigation: string | null = null;

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.routerEventsSubscription = this.router.events.pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            ).subscribe((event: NavigationEnd) => {
                // Check if it's a browser back/forward navigation
                if (event.id === 1 && event.url === this.lastNavigation) {
                    this.handleBrowserNavigation();
                } else {
                    this.handleNormalNavigation(event);
                }
                this.lastNavigation = event.url;
            });
        }
    }

    private handleBrowserNavigation() {
        document.body.style.pointerEvents = 'none';
        this.transitionOutAndIn().then(() => {
            document.body.style.pointerEvents = 'auto';
        });
    }

    private handleNormalNavigation(event: NavigationEnd) {
        document.body.style.pointerEvents = 'none';
        document.querySelector('.app')?.classList.add('is-transitioning');
        this.transitionIn().then(() => {
            document.querySelector('.app')?.classList.remove('is-transitioning');
            document.body.style.pointerEvents = 'auto';
        });
    }

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            Promise.resolve(null).then(() => {
                this.transitionIn().then(() => {
                    gsap.set(".block", { visibility: "hidden" });
                });
                this.setupLinkListeners();
            });
        }
    }

    ngOnDestroy() {
        if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
        }
    }

    private setupLinkListeners() {
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(() => {
                const links = document.querySelectorAll('a[routerLink]');
                links.forEach((link) => {
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        const href = link.getAttribute('routerLink');
                        if (href && !href.startsWith('#') && href !== this.router.url) {
                            document.body.style.pointerEvents = 'none';
                            this.transitionOutAndIn().then(() => {
                                this.router.navigate([href]).then(() => {
                                    document.body.style.pointerEvents = 'auto';
                                }).catch((error) => {
                                    console.error('Navigation error:', error);
                                    document.body.style.pointerEvents = 'auto';
                                });
                            });
                        }
                    });
                });
            }, 0);
        }
    }

    private transitionIn() {
        return this.animateTransition(1, 0);
    }

    private transitionOut() {
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