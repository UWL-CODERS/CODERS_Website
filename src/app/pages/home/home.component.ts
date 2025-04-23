import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LogoTransitionComponent } from '../../components/logo-transition/logo-transition.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, LogoTransitionComponent],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('bannerSlider') bannerSlider!: ElementRef;
  @ViewChild('prevSlideBtn') prevSlideBtn!: ElementRef;
  @ViewChild('nextSlideBtn') nextSlideBtn!: ElementRef;
  @ViewChild('sliderDots') sliderDots!: ElementRef;

  currentSlide = 0;
  slideInterval: any;
  private readonly SLIDE_INTERVAL = 5000; // 5 seconds
  private touchStartX = 0;
  private touchEndX = 0;
  private isTransitioning = false;
  private clonedSlides: any[] = [];

  // Banner slides with technology-related images
  bannerSlides = [
    {
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Welcome to CODERS',
      description: 'Join our community of passionate developers',
    },
    {
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Learn & Grow',
      description: 'Enhance your coding skills with us',
    },
    {
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Build Projects',
      description: 'Work on real-world projects',
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Connect & Collaborate',
      description: 'Network with fellow developers',
    },
  ];

  // Features with technology-related images
  features = [
    {
      title: 'Coding Workshops',
      description: 'Regular workshops to enhance your coding skills',
      icon: 'pi pi-code',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      techStack: ['JavaScript', 'Python', 'Java'],
    },
    {
      title: 'Tech Projects',
      description: 'Work on real-world projects with modern technologies',
      icon: 'pi pi-sitemap',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      techStack: ['React', 'Angular', 'Node.js'],
    },
    {
      title: 'Tech Community',
      description: 'Connect with like-minded developers',
      icon: 'pi pi-users',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      techStack: ['Networking', 'Collaboration'],
    },
  ];

  // Activities with technology-related images
  activities = [
    {
      title: 'Code Teaching',
      description: 'Teach coding to beginners and help them grow',
      icon: 'pi pi-book',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      technologies: ['Teaching', 'Mentoring'],
    },
    {
      title: 'Career Prep',
      description: 'Prepare for your tech career with industry insights',
      icon: 'pi pi-briefcase',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      technologies: ['Resume', 'Interview Prep'],
    },
    {
      title: 'Hackathons',
      description: 'Participate in exciting hackathons and coding competitions',
      icon: 'pi pi-flag',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      technologies: ['Competition', 'Innovation'],
    },
  ];

  // Events with technology-related images
  events = [
    {
      title: 'Cookies With CODERS',
      time: 'Every Tuesday',
      timeRange: '3:00 PM - 4:00 PM',
      location: 'Wing Technology Center',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      tags: ['Social', 'Networking'],
    },
    {
      title: 'Kids College',
      time: 'Every Wednesday',
      timeRange: '4:00 PM - 5:00 PM',
      timeRange2: '5:00 PM - 6:00 PM',
      location: 'Wing Technology Center',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      tags: ['Teaching', 'Outreach'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeBannerSlider();
    this.setupTouchEvents();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  initializeBannerSlider(): void {
    // Create dots
    this.bannerSlides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => this.goToSlide(index));
      this.sliderDots.nativeElement.appendChild(dot);
    });

    // Clone slides for infinite loop
    this.setupInfiniteLoop();

    // Start auto-slide
    this.startAutoSlide();

    // Add event listeners for buttons
    this.prevSlideBtn.nativeElement.addEventListener('click', () => this.prevSlide());
    this.nextSlideBtn.nativeElement.addEventListener('click', () => this.nextSlide());
  }

  setupInfiniteLoop(): void {
    if (!this.bannerSlider) return;
    
    const slider = this.bannerSlider.nativeElement;
    const slides = slider.children;
    
    // Clone first and last slides
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    // Add clones to the slider
    slider.appendChild(firstClone);
    slider.insertBefore(lastClone, slides[0]);
    
    // Set initial position to show the first real slide
    slider.style.transform = 'translateX(-100%)';
    
    // Store cloned slides for reference
    this.clonedSlides = [lastClone, firstClone];
  }

  setupTouchEvents(): void {
    const slider = this.bannerSlider.nativeElement;
    
    slider.addEventListener('touchstart', (e: TouchEvent) => {
      this.touchStartX = e.touches[0].clientX;
      this.stopAutoSlide();
    });

    slider.addEventListener('touchmove', (e: TouchEvent) => {
      this.touchEndX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
      const swipeDistance = this.touchEndX - this.touchStartX;
      if (Math.abs(swipeDistance) > 50) { // Minimum swipe distance
        if (swipeDistance > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      }
      this.startAutoSlide();
    });
  }

  startAutoSlide(): void {
    this.stopAutoSlide(); // Clear any existing interval
    this.slideInterval = setInterval(() => {
      if (!this.isTransitioning) {
        this.nextSlide();
      }
    }, this.SLIDE_INTERVAL);
  }

  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  goToSlide(index: number): void {
    if (this.isTransitioning) return;
    
    if (index >= 0 && index < this.bannerSlides.length) {
      this.isTransitioning = true;
      this.currentSlide = index;
      this.updateSlider();
      
      // Reset transition flag after animation
      setTimeout(() => {
        this.isTransitioning = false;
      }, 500); // Match this with CSS transition duration
    }
  }

  prevSlide(): void {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide - 1 + this.bannerSlides.length) % this.bannerSlides.length;
    this.updateSlider();
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  nextSlide(): void {
    if (this.isTransitioning) return;
    
    this.isTransitioning = true;
    this.currentSlide = (this.currentSlide + 1) % this.bannerSlides.length;
    this.updateSlider();
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  updateSlider(): void {
    if (!this.bannerSlider || !this.sliderDots) return;
    
    const slider = this.bannerSlider.nativeElement;
    const dots = this.sliderDots.nativeElement.children;
    const totalSlides = this.bannerSlides.length;
    
    // Calculate the position with the cloned slides
    const position = -(this.currentSlide + 1) * 100;
    
    // Update slider position with smooth transition
    slider.style.transform = `translateX(${position}%)`;
    
    // Check if we need to reset to the other end
    if (this.currentSlide === totalSlides - 1) {
      // If we're at the last slide, wait for transition to complete then jump to first
      setTimeout(() => {
        slider.style.transition = 'none';
        this.currentSlide = 0;
        slider.style.transform = 'translateX(-100%)';
        
        // Force a reflow
        slider.offsetHeight;
        
        // Restore transition
        slider.style.transition = 'transform 0.5s ease-in-out';
      }, 500);
    } else if (this.currentSlide === 0) {
      setTimeout(() => {
        slider.style.transition = 'none';
        this.currentSlide = totalSlides - 1;
        slider.style.transform = `translateX(-${totalSlides * 100}%)`;
        
        // Force a reflow
        slider.offsetHeight;
        
        // Restore transition
        slider.style.transition = 'transform 0.5s ease-in-out';
      }, 500);
    }

    // Update dots
    Array.from(dots).forEach((dot: any, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });

    // Reset auto-slide timer
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
