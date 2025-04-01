import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, NgZone, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet],
    standalone: true,
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    private router = inject(Router);
    private platformId = inject<Object>(PLATFORM_ID);
    private ngZone = inject(NgZone);

    title = 'CODERS Website';
    private ease = "bounce.out"; // Updated easing option
    private routerEventsSubscription: Subscription | null = null;
    private lastNavigation: string | null = null;
    isTransitioningManually: boolean = false;

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.routerEventsSubscription = this.router.events.pipe(
                filter(
                    (event): event is NavigationStart | NavigationEnd =>
                        event instanceof NavigationStart || event instanceof NavigationEnd
                )
            ).subscribe((event) => {
                if (event instanceof NavigationStart) {
                    if (!this.isTransitioningManually && event.id > 1) {
                        this.startTransitionOut();
                    }
                }

                if (event instanceof NavigationEnd) {
                    window.addEventListener('popstate', () => {
                        window.location.reload();
                    });

                    if (this.isTransitioningManually) {
                        return;
                    }

                    if (event.id === 1 && event.url === this.lastNavigation) {
                        this.handleBrowserNavigation();
                    } else {
                        this.handleNormalNavigation(event);
                    }
                    this.lastNavigation = event.url;
                }
            });
        }
    }

    private startTransitionOut() {
        document.body.style.pointerEvents = 'none';
        this.transitionOut().then(() => {
            console.log('transitionOut finished (from NavigationStart)');
        });
    }

    private handleBrowserNavigation() {
        document.body.style.pointerEvents = 'none';
        this.transitionOut().then(() => {
            const route = this.router.url;
            this.router.navigate([route]).then(() => {
                this.transitionIn().then(() => {
                    document.body.style.pointerEvents = 'auto';
                });
            });
        });
    }

    private handleNormalNavigation(event: NavigationEnd) {
        if (this.isTransitioningManually) {
            return;
        }
        document.body.style.pointerEvents = 'none';
        document.querySelector('.app')?.classList.add('is-transitioning');
        this.transitionIn().then(() => {
            document.querySelector('.app')?.classList.remove('is-transitioning');
            document.body.style.pointerEvents = 'auto';
        });
    }

    preventNavigation(event: Event, url: string) {
        this.isTransitioningManually = true;
        event.preventDefault();
        if (url && url !== this.router.url) {
            document.body.style.pointerEvents = 'none';
            this.transitionOut().then(() => {
                setTimeout(() => {
                    this.router.navigateByUrl(url).then(() => {
                        this.transitionIn().then(() => {
                            this.isTransitioningManually = false;
                            document.body.style.pointerEvents = 'auto';
                        });
                    });
                }, 0);
            });
        }
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
                const container = document.querySelector('.app-content'); // Scope to a specific container
                if (container) {
                    const links = container.querySelectorAll('a[routerLink]');
                    links.forEach((link) => {
                        link.addEventListener('click', (event) => {
                            event.preventDefault();
                            const href = link.getAttribute('routerLink');
                            if (href && !href.startsWith('#') && href !== this.router.url) {
                                this.preventNavigation(event, href);
                            }
                        });
                    });
                }
            }, 0);
        }
    }

    private transitionIn() {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                const contentContainer = document.querySelector('.content-container');
                if (contentContainer) {
                    contentContainer.classList.remove('content-hidden');
                }
                this.animateTransition(1, 0).then(() => {
                    resolve();
                });
            }, 0);
        });
    }

    private transitionOut() {
        return this.animateTransition(0, 1);
    }

    private animateTransition(fromScale: number, toScale: number) {
        if (isPlatformBrowser(this.platformId)) {
            return new Promise<void>((resolve) => {
                this.ngZone.runOutsideAngular(() => {
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
                        ease: "bounce.out", // Use bounce easing for all transitions
                    });

                    // Animate blocks in row 2
                    gsap.to(".transition-row.row-2 .block", {
                        scaleY: toScale,
                        duration: duration,
                        stagger: {
                            each: 0.1,
                            from: "start",
                        },
                        ease: "bounce.out", // Use bounce easing for all transitions
                        onComplete: resolve,
                    });
                });
            });
        } else {
            return Promise.resolve();
        }
    }
}