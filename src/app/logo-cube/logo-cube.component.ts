import { Component, ElementRef, Renderer2, AfterViewInit, inject, viewChild } from '@angular/core';

@Component({
  selector: 'app-logo-cube',
  templateUrl: './logo-cube.component.html',
  styleUrl: './logo-cube.component.css'
})
export class LogoCubeComponent implements AfterViewInit {
  private renderer = inject(Renderer2);

  readonly logoCubeContainer = viewChild.required<ElementRef>('logoCubeContainer');
  readonly cubeElement = viewChild.required<ElementRef>('cubeElement');

  private isAnimating = false;

  constructor(...args: unknown[]);

  constructor() {}

  ngAfterViewInit(): void {
    this.setRandomInitialPosition();
  }

  setRandomInitialPosition(): void {
    const cube = this.cubeElement().nativeElement;
    const randomYRotation = Math.floor(Math.random() * 360); // Random angle between 0 and 359 degrees
    const randomZRotation = Math.floor(Math.random() * 360);

    this.renderer.setStyle(cube, 'transform', `rotateY(${randomYRotation}deg) rotateZ(${randomZRotation}deg)`);
  }

  startAnimation(): void {
    if (this.isAnimating) {
      return;
    }
    this.isAnimating = true;

    const containerElement = this.logoCubeContainer().nativeElement;
    const cube = this.cubeElement().nativeElement;

    // Reset classes to the initial state
    this.renderer.removeClass(containerElement, 'zoom-in');
    this.renderer.removeClass(containerElement, 'open');
    this.renderer.removeClass(cube, 'open');
    this.renderer.removeClass(containerElement, 'close');
    this.renderer.removeClass(containerElement, 'zoom-out');

    // Remove any inline transform that might have been set
    this.renderer.removeStyle(cube, 'transform');

    // 1. Zoom In
    this.renderer.addClass(containerElement, 'zoom-in');

    // 2. Open after a longer delay
    setTimeout(() => {
      this.renderer.addClass(containerElement, 'open');
      this.renderer.addClass(cube, 'open');
    }, 2000); // Delay before the cube starts to open (milliseconds)

    // 3. Close after another delay
    setTimeout(() => {
      this.renderer.removeClass(containerElement, 'open');
      this.renderer.removeClass(cube, 'open');
      this.renderer.addClass(containerElement, 'close');
    }, 4000); // Delay before the cube starts to close (milliseconds)

    // 4. Zoom Out and Fade Out after another delay
    setTimeout(() => {
      this.renderer.removeClass(containerElement, 'zoom-in');
      this.renderer.removeClass(containerElement, 'close');
      this.renderer.addClass(containerElement, 'zoom-out');
      this.isAnimating = false;
      // After the animation ends, set a new random initial position for the next time
      setTimeout(() => {
        this.setRandomInitialPosition();
      }, 0); // Small delay to ensure zoom-out is complete before resetting position
    }, 4600); // Delay before the cube starts to zoom out and fade (milliseconds)
  }
}