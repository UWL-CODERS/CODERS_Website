// main.component.ts
import { CommonModule } from "@angular/common"
import { type AfterViewInit, Component, type ElementRef, type OnDestroy, ViewChild } from "@angular/core"
import { LogoTransitionComponent } from '../../components/logo-transition/logo-transition.component'; // Import LogoTransitionComponent

interface BannerSlide {
  image: string
  title: string
  description: string
}

interface Feature {
  icon: string
  title: string
  description: string
  image: string
  techStack: string[]
}

interface Activity {
  icon: string
  title: string
  description: string
  image: string
  technologies: string[]
}

interface Event {
  title: string
  time: string
  timeRange: string
  timeRange2?: string
  location?: string
  image: string
  tags: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, LogoTransitionComponent], // Add LogoTransitionComponent to imports
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild("bannerSlider") bannerSlider!: ElementRef<HTMLElement>
  @ViewChild("prevSlideBtn") prevSlideBtn!: ElementRef<HTMLButtonElement>
  @ViewChild("nextSlideBtn") nextSlideBtn!: ElementRef<HTMLButtonElement>
  @ViewChild("sliderDots") sliderDots!: ElementRef<HTMLElement>
  @ViewChild(LogoTransitionComponent) logoTransition!: LogoTransitionComponent; // ViewChild to access LogoTransitionComponent

  private currentSlide = 0
  private slideInterval: any

  bannerSlides: BannerSlide[] = [
    {
      image: "assets/images/Logos/logo.png",
      title: "< CODERS />",
      description: "Where Innovation Meets Community",
    },
    {
      image: "assets/images/Logos/logo.png",
      title: "Code. Create. Connect.",
      description: "Join our tech community at UW-La Crosse",
    },
    {
      image: "assets/images/Logos/logo.png",
      title: "Hack & Learn",
      description: "Weekly coding sessions with free cookies!",
    },
    {
      image: "assets/images/Logos/logo.png",
      title: "Build the Future",
      description: "Work on real projects that impact our community",
    },
  ];

  // Features with technology-related images
  features = [
    {
      icon: "pi pi-code",
      title: "Coding Workshops",
      description: "Weekly hands-on coding sessions covering web development, mobile apps, and more",
      image: "assets/images/Logos/logo.png",
      techStack: ["JavaScript", "Python", "Java", "React", "Angular"],
    },
    {
      icon: "pi pi-globe",
      title: "Tech Projects",
      description: "Build real-world applications and contribute to open-source projects",
      image: "assets/images/Logos/logo.png",
      techStack: ["Git", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      icon: "pi pi-users",
      title: "Tech Community",
      description: "Connect with fellow developers and industry professionals",
      image: "assets/images/Logos/logo.png",
      techStack: ["Networking", "Mentorship", "Career Development"],
    },
  ];

  // Activities with technology-related images
  activities = [
    {
      icon: "pi pi-desktop",
      title: "Code Teaching",
      description: "Share your knowledge by teaching coding to local students and community members.",
      image: "assets/images/Logos/logo.png",
      technologies: ["HTML/CSS", "JavaScript", "Python", "Scratch"],
    },
    {
      icon: "pi pi-briefcase",
      title: "Tech Career Prep",
      description: "Get ready for your tech career with resume workshops, mock interviews, and coding practice.",
      image: "assets/images/Logos/logo.png",
      technologies: ["LeetCode", "HackerRank", "System Design", "Behavioral"],
    },
    {
      icon: "pi pi-globe",
      title: "Hackathons",
      description: "Participate in hackathons and coding competitions to challenge yourself and win prizes.",
      image: "assets/images/Logos/logo.png",
      technologies: ["Full-Stack", "AI/ML", "IoT", "Cloud"],
    },
  ];

  // Events with technology-related images
  events = [
    {
      title: "Cookies With CODERS",
      time: "Every Tuesday",
      timeRange: "3:30 PM - 5:30 PM",
      location: "WING 016",
      image: "assets/images/Logos/logo.png",
      tags: ["Coding", "Cookies", "Community"],
    },
    {
      title: "Code Teaching",
      time: "March 13, 20, 27",
      timeRange: "3:45 PM - 5:10 PM",
      image: "assets/images/Logos/logo.png",
      tags: ["Python", "Scratch", "Teaching"],
    },
    {
      title: "Kid's College: Code Edition",
      time: "April 11",
      timeRange: "Session 2: 10:50 AM - 11:50 AM",
      timeRange2: "Session 3: 12:40 PM - 1:40 PM",
      image: "assets/images/Logos/logo.png",
      tags: ["Web Dev", "Games", "Fun"],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.bannerSlider()
    this.logoTransition.startAnimation(); // Start the logo transition
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
