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
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      title: "< CODERS />",
      description: "Where Innovation Meets Community",
    },
    {
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      title: "Code. Create. Connect.",
      description: "Join our tech community at UW-La Crosse",
    },
    {
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2",
      title: "Hack & Learn",
      description: "Weekly coding sessions with free cookies!",
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      title: "Build the Future",
      description: "Work on real projects that impact our community",
    },
  ]

  features: Feature[] = [
    {
      icon: "pi pi-code",
      title: "Coding Workshops",
      description: "Weekly hands-on coding sessions covering web development, mobile apps, and more",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      techStack: ["JavaScript", "Python", "Java", "React", "Angular"],
    },
    {
      icon: "pi pi-globe",
      title: "Tech Projects",
      description: "Build real-world applications and contribute to open-source projects",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      techStack: ["Git", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      icon: "pi pi-users",
      title: "Tech Community",
      description: "Connect with fellow developers and industry professionals",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      techStack: ["Networking", "Mentorship", "Career Development"],
    },
  ]

  activities: Activity[] = [
    {
      icon: "pi pi-desktop",
      title: "Code Teaching",
      description: "Share your knowledge by teaching coding to local students and community members.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      technologies: ["HTML/CSS", "JavaScript", "Python", "Scratch"],
    },
    {
      icon: "pi pi-briefcase",
      title: "Tech Career Prep",
      description: "Get ready for your tech career with resume workshops, mock interviews, and coding practice.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      technologies: ["LeetCode", "HackerRank", "System Design", "Behavioral"],
    },
    {
      icon: "pi pi-globe",
      title: "Hackathons",
      description: "Participate in hackathons and coding competitions to challenge yourself and win prizes.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      technologies: ["Full-Stack", "AI/ML", "IoT", "Cloud"],
    },
  ]

  events: Event[] = [
    {
      title: "Cookies With CODERS",
      time: "Every Tuesday",
      timeRange: "3:30 PM - 5:30 PM",
      location: "WING 016",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
      tags: ["Coding", "Cookies", "Community"],
    },
    {
      title: "Code Teaching",
      time: "March 13, 20, 27",
      timeRange: "3:45 PM - 5:10 PM",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      tags: ["Python", "Scratch", "Teaching"],
    },
    {
      title: "Kid's College: Code Edition",
      time: "April 11",
      timeRange: "Session 2: 10:50 AM - 11:50 AM",
      timeRange2: "Session 3: 12:40 PM - 1:40 PM",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      tags: ["Web Dev", "Games", "Fun"],
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
