import { Component, OnInit, AfterViewInit, OnDestroy, inject, PLATFORM_ID, viewChild } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CookiesConsentComponent } from './components/cookies-consent/cookies-consent.component';
import { PageTransitionComponent } from './components/page-transition/page-transition.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterOutlet, CookiesConsentComponent, PageTransitionComponent]
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    private readonly router = inject(Router);
    private readonly platformId = inject<Object>(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);

    readonly pageTransition = viewChild.required<PageTransitionComponent>('pageTransition');

    title = 'CODERS Club';
    private routerEventsSubscription: Subscription | null = null;
    private lastNavigationUrl: string | null = null;
    private bodyClickListener: ((event: MouseEvent) => void) | null = null;

    ngOnInit() {
        if (this.isBrowser) {
            this.routerEventsSubscription = this.router.events.pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd)
            ).subscribe((event: NavigationEnd) => {
                // Check if it's a browser back/forward navigation
                if (event.url === this.lastNavigationUrl && event.id !== 1) {
                     this.handleBrowserNavigation();
                } else {
                    this.handleNormalNavigation();
                }
                this.lastNavigationUrl = event.url;
            });
        }
    }

    private handleBrowserNavigation() {
        if (!this.isBrowser) return;

        this.disableInteractions();
        this.pageTransition().transitionOutAndIn().then(this.enableInteractions);
    }

    private handleNormalNavigation() {
        if (!this.isBrowser) return;

        document.querySelector('.app')?.classList.add('is-transitioning');
        this.pageTransition().transitionIn().then(() => {
            document.querySelector('.app')?.classList.remove('is-transitioning');
            this.enableInteractions();
        });
    }

    ngAfterViewInit() {
        if (this.isBrowser) {
            queueMicrotask(() => {
                this.pageTransition().transitionIn();
                this.setupLinkListeners();
            });
        }
    }

    ngOnDestroy() {
        this.routerEventsSubscription?.unsubscribe();
        this.removeLinkListeners();
    }

    private setupLinkListeners() {
        if (!this.isBrowser) return;

        this.bodyClickListener = (event: MouseEvent) => {
            const link = (event.target as Element)?.closest('a[routerLink]');
            if (!link) return;

            const href = link.getAttribute('routerLink');
            if (href && !href.startsWith('#') && href !== this.router.url) {
                event.preventDefault();
                this.disableInteractions();
                this.pageTransition().transitionOut().then(() => {
                    this.router.navigate([href]).catch((error) => {
                        console.error('Navigation error:', error);
                        this.enableInteractions();
                    });
                });
            }
        };
        document.body.addEventListener('click', this.bodyClickListener);
    }

    private removeLinkListeners() {
        if (this.isBrowser && this.bodyClickListener) {
            document.body.removeEventListener('click', this.bodyClickListener);
            this.bodyClickListener = null;
        }
    }

    private disableInteractions = () => {
        if (this.isBrowser) {
            document.body.style.pointerEvents = 'none';
        }
    };

    private enableInteractions = () => {
        if (this.isBrowser) {
            document.body.style.pointerEvents = 'auto';
        }
    };
}