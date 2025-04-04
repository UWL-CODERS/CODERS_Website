import { TuiRoot } from "@taiga-ui/core";
import { Component, OnInit, AfterViewInit, OnDestroy, PLATFORM_ID, NgZone, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { gsap } from 'gsap';
import { CookiesConsentComponent } from './components/cookies-consent/cookies-consent.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, CookiesConsentComponent, TuiRoot]
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    private router = inject(Router);
    private platformId = inject<Object>(PLATFORM_ID);
    private ngZone = inject(NgZone);

    title = 'CODERS Website';

    // OPTIONS: https://editor.p5js.org/shibomb/sketches/c4zVvFz8k
    private ease = "power1.inOut"

    private routerEventsSubscription: Subscription | null = null;

    private lastNavigation: string | null = null;

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.routerEventsSubscription = this.router.events.pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            ).subscribe((event: NavigationEnd) => {
                window.addEventListener('popstate', () => {
                    window.location.reload();
                });
                  
                if (event.id === 1 && event.url === this.lastNavigation) {
                    // This is a browser back/forward navigation
                    this.handleBrowserNavigation();
                } else {
                    // This is a normal navigation
                    this.handleNormalNavigation(event);
                }
                this.lastNavigation = event.url;
            });
        }
        
    }

    private handleBrowserNavigation() {
        document.body.style.pointerEvents = 'none';
        this.transitionOut().then(() => {
                this.transitionIn().then(() => {
                    document.body.style.pointerEvents = 'auto';
                });
            });
    }
    

    private handleNormalNavigation(event: NavigationEnd) {
        document.body.style.pointerEvents = 'none';
        document.querySelector('.app')?.classList.add('is-transitioning');
        // window.location.reload(); // This is causing the page to reload infinitely
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
                            this.transitionOut().then(() => {
                                this.router.navigate([href]).then(() => {
                                    this.transitionIn().then(() => {
                                        document.body.style.pointerEvents = 'auto';
                                    });
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
    
    private animateTransition(fromScale: number, toScale: number) {
        if (isPlatformBrowser(this.platformId)) {
            return new Promise<void>((resolve) => {
                this.ngZone.runOutsideAngular(() => {
                    gsap.set(".block", { visibility: "visible", scaleY: fromScale });
    
                    // Animate blocks in row 1
                    gsap.to(".transition-row.row-1 .block", {
                        scaleY: toScale,
                        duration: 1,
                        stagger: {
                            each: 0.1,
                            // When changing transitions, change to either "start" (L) or "end" (R)
                            from: "end",
                        },
                        ease: this.ease,
                    });
    
                    // Animate blocks in row 2
                    gsap.to(".transition-row.row-2 .block", {
                        scaleY: toScale,
                        duration: 1,
                        stagger: {
                            each: 0.1,
                            // When changing transitions, change to either "start" (L) or "end" (R)
                            from: "end",
                        },
                        ease: this.ease,
                        onComplete: resolve,
                    });
                });
            });
        } else {
            return Promise.resolve();
        }
    }
    
}
