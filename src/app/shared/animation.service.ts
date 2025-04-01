import { Injectable, Renderer2, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {}

  animateEntrance(renderer: Renderer2, element: ElementRef, selector: string) {
    const target = element.nativeElement.querySelector(selector);
    if (target) {
      renderer.setStyle(target, 'opacity', '0');
      renderer.setStyle(target, 'transform', 'translateY(50px)');
      setTimeout(() => {
        renderer.setStyle(target, 'transition', 'opacity 1s ease-out, transform 1s ease-out');
        renderer.setStyle(target, 'opacity', '1');
        renderer.setStyle(target, 'transform', 'translateY(0)');
      }, 100);
    }
  }

  animateExit(renderer: Renderer2, element: ElementRef, selector: string) {
    const target = element.nativeElement.querySelector(selector);
    if (target) {
      renderer.setStyle(target, 'transform-origin', 'bottom');
      renderer.setStyle(target, 'transform', 'scaleY(1)');
      setTimeout(() => {
        renderer.setStyle(target, 'transition', 'transform 0.8s ease-in-out');
        renderer.setStyle(target, 'transform', 'scaleY(0)');
      }, 100);
    }
  }

  resetOverlay(renderer: Renderer2, element: ElementRef, selector: string) {
    const target = element.nativeElement.querySelector(selector);
    if (target) {
      renderer.setStyle(target, 'transform', 'scaleY(1)'); // Ensure the overlay starts fully visible
    }
  }
}