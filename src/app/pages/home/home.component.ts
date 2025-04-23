import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('bannerSlider') bannerSlider!: ElementRef;
  @ViewChild('prevSlideBtn') prevSlideBtn!: ElementRef;
  @ViewChild('nextSlideBtn') nextSlideBtn!: ElementRef;
  @ViewChild('sliderDots') sliderDots!: ElementRef;

  currentSlide = 0;
  slideInterval: any;
  private readonly SLIDE_INTERVAL = 5000; // 5 seconds

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

    // Start auto-slide
    this.startAutoSlide();

    // Add event listeners for buttons
    this.prevSlideBtn.nativeElement.addEventListener('click', () => this.prevSlide());
    this.nextSlideBtn.nativeElement.addEventListener('click', () => this.nextSlide());
  }

  startAutoSlide(): void {
    this.stopAutoSlide(); // Clear any existing interval
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, this.SLIDE_INTERVAL);
  }

  stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  goToSlide(index: number): void {
    if (index >= 0 && index < this.bannerSlides.length) {
      this.currentSlide = index;
      this.updateSlider();
    }
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.bannerSlides.length) % this.bannerSlides.length;
    this.updateSlider();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.bannerSlides.length;
    this.updateSlider();
  }

  updateSlider(): void {
    if (!this.bannerSlider || !this.sliderDots) return;
    
    const slider = this.bannerSlider.nativeElement;
    const dots = this.sliderDots.nativeElement.children;

    // Update slider position
    slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;

    // Update dots
    Array.from(dots).forEach((dot: any, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });

    // Reset auto-slide timer
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
