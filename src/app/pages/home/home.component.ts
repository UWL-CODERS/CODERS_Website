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
  selector: "app-home",
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
      image: "assets/images/Other/coding.jpeg",
      title: "< CODERS />",
      description: "Where Innovation Meets Community",
    },
    {
      image: "assets/images/TrickOrTreat24/IMG_6144_Long.png",
      title: "Code. Create. Connect.",
      description: "Join our tech community at UW-La Crosse",
    },
    {
      image: "assets/images/CookiesCODERS/IMG_7009.png",
      title: "Learn and Grow",
      description: "Weekly coding sessions with free cookies!",
    },
    {
      image: "assets/images/Kids College Pictures/IMG_6887.png",
      title: "Help Us Build the Future",
      description: "Work on real projects that impact our community",
    },
  ]

  features: Feature[] = [
    {
      icon: "pi pi-code",
      title: "Coding Workshops",
      description: "Volunteer and On-Campus hands-on coding sessions covering a variety of topics",
      image: "assets/images/Kids College Pictures/IMG_6923.png",
      techStack: ["Python", "Java", "Code.org"],
    },
    {
      icon: "pi pi-globe",
      title: "CODERS Projects",
      description: "Build real-world applications and contribute to open-source team projects that impact our community",
      image: "assets/images/Logos/logo.png",
      techStack: ["Typescript", "SCSS", "Javascript", "HTML", "Angular"],
    },
    {
      icon: "pi pi-users",
      title: "Tech Community",
      description: "Connect with fellow developers and industry professionals for advice and mentorship",
      image: "assets/images/Intern_Panel24/IMG_7995.jpg",
      techStack: ["Networking", "Personal Growth", "Internship Advice", "Career Development"],
    },
  ]

  activities: Activity[] = [
    {
      icon: "pi pi-desktop",
      title: "Teaching Computer Science",
      description: "Share your knowledge by teaching basic coding conecpts to students and community members.",
      image: "assets/images/Other/Codeorg.png",
      technologies: ["Scratch", "Code.org", "Python", "Presenting New Concepts"],
    },
    {
      icon: "pi pi-briefcase",
      title: "Local Volunteering",
      description: "Volunteer for good causes to teach Computer Science and Coding Concepts to the next generation of innovators.",
      image: "assets/images/Boys_And_Girls/IMG_6759.png",
      technologies: ["Volunteer", "Coding", "Fun", "Teaching"],
    },
    {
      icon: "pi pi-globe",
      title: "Cookies With CODERS",
      description: "Chill and relax with fellow CODERS members while enjoying free cookies!",
      image: "assets/images/CookiesCODERS/Cookievar.JPG",
      technologies: ["Chill", "Coding", "Cookies", "Tasty"],
    },
  ]

  events: Event[] = [
    {
      title: "Cookies With CODERS",
      time: "Every Tuesday",
      timeRange: "3:30 PM - 5:30 PM",
      location: "WING 016",
      image: "assets/images/Other/cookiemain.png",
      tags: ["Coding", "Cookies", "Community"],
    },
    {
      title: "Code Teaching",
      time: "Coming Soon",
      timeRange: "TBD",
      image: "assets/images/Logos/logo.png",
      tags: ["Python", "Scratch", "Teaching"],
    },
    {
      title: "Kid's College: CODERS Lab",
      time: "April 11th",
      timeRange: "Session 2: 10:50 AM - 11:50 AM",
      timeRange2: "Session 3: 12:40 PM - 1:40 PM",
      image: "assets/images/Kids College Pictures/presentation.png",
      tags: ["Conceptual", "Games", "Fun"],
    },
  ]

  ngAfterViewInit(): void {
    this.initBannerSlider()
    this.logoTransition.startAnimation(); // Start the logo transition
  }

  ngOnDestroy(): void {
    this.pauseAutoSlide()
  }

  private initBannerSlider(): void {
    if (!this.bannerSlider || !this.prevSlideBtn || !this.nextSlideBtn || !this.sliderDots) {
      console.error("Required elements not found")
      return
    }

    const slider = this.bannerSlider.nativeElement
    const dotsContainer = this.sliderDots.nativeElement
    const totalSlides = this.bannerSlides.length

    this.createDots(totalSlides, dotsContainer)
    this.updateSlider()

    this.startAutoSlide()

    slider.addEventListener("mouseenter", () => this.pauseAutoSlide())
    slider.addEventListener("mouseleave", () => this.startAutoSlide())
  }

  private createDots(totalSlides: number, container: HTMLElement): void {
    container.innerHTML = ""
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div")
      dot.className = "dot"
      if (i === 0) {
        dot.classList.add("active")
      }
      dot.addEventListener("click", () => this.goToSlide(i))
      container.appendChild(dot)
    }
  }

  private updateSlider(): void {
    const slider = this.bannerSlider.nativeElement
    const dotsContainer = this.sliderDots.nativeElement

    slider.style.transform = `translateX(-${this.currentSlide * 100}%)`

    const dots = dotsContainer.querySelectorAll(".dot")
    dots.forEach((dot: Element, index: number) => {
      if (index === this.currentSlide) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.bannerSlides.length
    this.updateSlider()
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.bannerSlides.length) % this.bannerSlides.length
    this.updateSlider()
  }

  goToSlide(index: number): void {
    this.currentSlide = index
    this.updateSlider()
  }

  private startAutoSlide(): void {
    this.slideInterval = setInterval(() => this.nextSlide(), 5000)
  }

  private pauseAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval)
    }
  }
}
