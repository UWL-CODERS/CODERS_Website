import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-page-transition',
  imports: [],
  templateUrl: './page-transition.component.html',
  styleUrl: './page-transition.component.scss'
})
export class PageTransitionComponent {
  private platformId = inject<Object>(PLATFORM_ID);

  public transitionIn(): Promise<void> {
    return this.animateTransition(1, 0);
  }

  public transitionOut(): Promise<void> {
    return this.animateTransition(0, 1);
  }

  public transitionOutAndIn(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.transitionOut().then(() => {
        this.transitionIn().then(resolve);
      });
    });
  }

  private animateTransition(fromScale: number, toScale: number): Promise<void> {
    return new Promise<void>((resolve) => {
      if (!isPlatformBrowser(this.platformId)) {
        resolve(); // Don't animate on the server
        return;
      }

      const hostElement = document.querySelector<HTMLElement>('app-page-transition'); // Target within the component
      if (!hostElement) {
        console.error("Page transition host element not found!");
        resolve();
        return;
      }

      const blocks = hostElement.querySelectorAll('.block');
      if (blocks.length === 0) {
        console.error("Transition blocks not found within page transition component!");
        resolve();
        return;
      }

      const ease = 'power4.inOut'; // Smooth easing for a natural transition
      const duration = 0.6; // Reduced duration for faster transitions

      // Ensure blocks are visible before animating out (scale 0 to 1)
      if (toScale === 1) {
        gsap.set(blocks, { visibility: 'visible', scaleY: fromScale });
        hostElement.style.pointerEvents = 'auto'; // Block interaction during transition out
      } else {
        gsap.set(blocks, { scaleY: fromScale }); // No need to set visibility if scaling down to 0
      }

      // Animate the first row of blocks
      gsap.to(hostElement.querySelectorAll('.transition-row.row-1 .block'), {
        scaleY: toScale,
        duration: duration,
        stagger: { each: 0.1, from: 'end' }, // Faster stagger
        ease: ease,
      });

      // Animate the second row of blocks and resolve the promise
      gsap.to(hostElement.querySelectorAll('.transition-row.row-2 .block'), {
        scaleY: toScale,
        duration: duration,
        stagger: { each: 0.1, from: 'end' }, // Faster stagger
        ease: ease,
        onComplete: () => {
          // Hide blocks after animating in (scale 1 to 0)
          if (toScale === 0) {
            gsap.set(blocks, { visibility: 'hidden' });
            hostElement.style.pointerEvents = 'none'; // Allow interaction after transition in
          }
          resolve();
        },
      });
    });
  }
}