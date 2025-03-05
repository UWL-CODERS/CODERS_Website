import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef<HTMLElement>;
  @ViewChild('prevSlideBtn') prevSlideBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('nextSlideBtn') nextSlideBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('sliderDots') sliderDots!: ElementRef<HTMLElement>;

  private currentSlide = 0;
  private slideInterval: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSlider();
    }
  }

  initSlider(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.slider || !this.prevSlideBtn || !this.nextSlideBtn || !this.sliderDots) {
        console.error('Required elements not found');
        return;
      }
  
      const slider = this.slider.nativeElement;
      const dotsContainer = this.sliderDots.nativeElement;
  
      const slides = slider.querySelectorAll('.slide');
      const totalSlides = slides.length;
  
      this.createDots(totalSlides, dotsContainer);
      this.updateSlider();
  
      // Remove these lines:
      // nextSlide.addEventListener('click', () => this.nextSlide());
      // prevSlide.addEventListener('click', () => this.prevSlide());
  
      this.startAutoSlide();
  
      slider.addEventListener('mouseenter', () => this.pauseAutoSlide());
      slider.addEventListener('mouseleave', () => this.startAutoSlide());
  
      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
      }
    }
  }  

  private createDots(totalSlides: number, dotsContainer: HTMLElement): void {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => this.goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  private updateSlider(): void {
    if (this.slider && this.sliderDots) {
      const slider = this.slider.nativeElement;
      const dotsContainer = this.sliderDots.nativeElement;
      
      slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;

      const dots = dotsContainer.querySelectorAll('.dot');
      dots.forEach((dot: Element, index: number) => {
        if (index === this.currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  }

  public nextSlide(): void {
    if (this.slider) {
      const totalSlides = this.slider.nativeElement.querySelectorAll('.slide').length;
      this.currentSlide = (this.currentSlide + 1) % totalSlides;
      this.updateSlider();
    }
  }
  
  public prevSlide(): void {
    if (this.slider) {
      const totalSlides = this.slider.nativeElement.querySelectorAll('.slide').length;
      this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
      this.updateSlider();
    }
  }
  

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlider();
  }

  private startAutoSlide(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }
  }

  private pauseAutoSlide(): void {
    if (isPlatformBrowser(this.platformId)) {
      clearInterval(this.slideInterval);
    }
  }

  private handleKeyNavigation(e: KeyboardEvent): void {
    if (isPlatformBrowser(this.platformId)) {
      if (e.key === 'ArrowLeft') {
        this.prevSlide();
      } else if (e.key === 'ArrowRight') {
        this.nextSlide();
      }
    }
  }
}
