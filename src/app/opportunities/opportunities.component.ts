import { Component, AfterViewInit, OnDestroy, ViewChildren, QueryList, ElementRef } from '@angular/core';

// --- Interfaces (for better type definition) ---

interface DragDistance {
  x: number;
  y: number;
}

interface CardUpdateData {
  x?: number; // The logical position
  scale?: number;
  leftPos?: number; // Percentage
  zIndex?: number;
}

// --- DraggingEvent Class (TypeScript) ---
// (No changes needed in DraggingEvent - keeping it as is)
class DraggingEvent {
  private target: HTMLElement;
  private mouseMoveHandler: ((e: MouseEvent | null) => void) | null = null;
  private touchMoveHandler: ((e: TouchEvent | null) => void) | null = null;
  private mouseUpHandler: (() => void) | null = null;
  private touchEndHandler: (() => void) | null = null;
  private docMouseLeaveHandler: (() => void) | null = null;
  private bodyMouseLeaveHandler: (() => void) | null = null;

  private mouseDownListener: (e: MouseEvent) => void;
  private touchStartListener: (e: TouchEvent) => void;

  constructor(target: HTMLElement) {
    if (!target) {
        throw new Error("DraggingEvent requires a target element.");
    }
    this.target = target;
    this.mouseDownListener = () => {};
    this.touchStartListener = () => {};
  }

  private event(callback: (e: MouseEvent | TouchEvent) => (e2: MouseEvent | TouchEvent | null) => void): void {
    this.mouseDownListener = (e: MouseEvent) => {
      e.preventDefault();
      const handler = callback(e);
      this.mouseMoveHandler = handler as (e: MouseEvent | null) => void;

      this.mouseUpHandler = () => this.clearMouseEventListeners(handler);
      this.docMouseLeaveHandler = () => this.clearMouseEventListeners(handler);

      window.addEventListener("mousemove", this.mouseMoveHandler);
      window.addEventListener("mouseup", this.mouseUpHandler);
      document.addEventListener("mouseleave", this.docMouseLeaveHandler);
    };
    this.target.addEventListener("mousedown", this.mouseDownListener);

    this.touchStartListener = (e: TouchEvent) => {
      const handler = callback(e);
      this.touchMoveHandler = handler as (e: TouchEvent | null) => void;

      this.touchEndHandler = () => this.clearTouchEventListeners(handler);
      this.bodyMouseLeaveHandler = () => this.clearTouchEventListeners(handler);

      window.addEventListener("touchmove", this.touchMoveHandler);
      window.addEventListener("touchend", this.touchEndHandler);
      document.body.addEventListener("mouseleave", this.bodyMouseLeaveHandler);
    };
    this.target.addEventListener("touchstart", this.touchStartListener);
  }

    private clearMouseEventListeners(handler: (e: MouseEvent | TouchEvent | null) => void): void {
        if (this.mouseMoveHandler) {
            window.removeEventListener("mousemove", this.mouseMoveHandler);
            this.mouseMoveHandler = null;
        }
        if (this.mouseUpHandler) {
            window.removeEventListener("mouseup", this.mouseUpHandler);
            this.mouseUpHandler = null;
        }
        if (this.docMouseLeaveHandler) {
            document.removeEventListener("mouseleave", this.docMouseLeaveHandler);
            this.docMouseLeaveHandler = null;
        }
        handler(null);
    }

    private clearTouchEventListeners(handler: (e: MouseEvent | TouchEvent | null) => void): void {
        if (this.touchMoveHandler) {
            window.removeEventListener("touchmove", this.touchMoveHandler);
            this.touchMoveHandler = null;
        }
        if (this.touchEndHandler) {
            window.removeEventListener("touchend", this.touchEndHandler);
            this.touchEndHandler = null;
        }
        if (this.bodyMouseLeaveHandler) {
             document.body.removeEventListener("mouseleave", this.bodyMouseLeaveHandler);
             this.bodyMouseLeaveHandler = null;
        }
        handler(null);
    }

  public getDistance(callback: (distance: DragDistance | null) => void): void {
    const distanceInit = (e1: MouseEvent | TouchEvent) => {
      let startingX: number, startingY: number;
      if ("touches" in e1) {
        startingX = e1.touches[0].clientX;
        startingY = e1.touches[0].clientY;
      } else {
        startingX = e1.clientX;
        startingY = e1.clientY;
      }
      return (e2: MouseEvent | TouchEvent | null) => {
        if (e2 === null) {
          callback(null);
        } else {
          if ("touches" in e2) {
            callback({ x: e2.touches[0].clientX - startingX, y: e2.touches[0].clientY - startingY });
          } else {
            callback({ x: e2.clientX - startingX, y: e2.clientY - startingY });
          }
        }
      };
    };
    this.event(distanceInit);
  }

  public destroy(): void {
    this.target.removeEventListener("mousedown", this.mouseDownListener);
    this.target.removeEventListener("touchstart", this.touchStartListener);
     if (this.mouseMoveHandler && this.mouseUpHandler && this.docMouseLeaveHandler) {
        window.removeEventListener("mousemove", this.mouseMoveHandler);
        window.removeEventListener("mouseup", this.mouseUpHandler);
        document.removeEventListener("mouseleave", this.docMouseLeaveHandler);
     }
     if (this.touchMoveHandler && this.touchEndHandler && this.bodyMouseLeaveHandler) {
        window.removeEventListener("touchmove", this.touchMoveHandler);
        window.removeEventListener("touchend", this.touchEndHandler);
        document.body.removeEventListener("mouseleave", this.bodyMouseLeaveHandler);
     }
  }
}


// --- CardCarousel Class (TypeScript) ---

class CardCarousel extends DraggingEvent {
  private container: HTMLElement;
  private controllerElement: HTMLElement | null;
  private cards: NodeListOf<HTMLElement>;

  private centerIndex: number;
  private cardWidth: number = 0;
  private xScale: Record<number, HTMLElement> = {}; // Maps logical index (e.g., -2, -1, 0, 1, 2) to card element

  private resizeListener: () => void;
  private keydownListener: (e: KeyboardEvent) => void;

  constructor(container: HTMLElement, controller: HTMLElement | null = null) {
    super(container);

    this.container = container;
    this.controllerElement = controller;
    this.cards = this.container.querySelectorAll(".card");

    if (this.cards.length === 0) {
      console.warn("CardCarousel: No card elements found.");
      this.centerIndex = 0;
      this.resizeListener = () => {}; // Assign empty functions for safe removal
      this.keydownListener = () => {};
      return;
    }

    this.centerIndex = (this.cards.length - 1) / 2;

    // Defer initial width calculation slightly to help ensure layout is stable
    setTimeout(() => {
        if (this.container.offsetWidth > 0 && this.cards.length > 0) {
            this.cardWidth = (this.cards[0].offsetWidth / this.container.offsetWidth) * 100;
        } else {
            console.warn("CardCarousel: Container width is zero or no cards after timeout. Width calculation failed.");
        }
        this.build(); // Build after width calculation
    }, 0);


    this.resizeListener = this.updateCardWidth.bind(this);
    this.keydownListener = this.controller.bind(this);

    window.addEventListener("resize", this.resizeListener);
    if (this.controllerElement) {
      this.controllerElement.setAttribute('tabindex', '0');
      this.controllerElement.addEventListener("keydown", this.keydownListener);
    }

    // Bind dragging event from parent class
    // NOTE: `moveCards` will be called by `getDistance` callback
    super.getDistance(this.moveCards.bind(this));
  }

  private updateCardWidth(): void {
    if (this.cards.length === 0 || this.container.offsetWidth <= 0) return;
    this.cardWidth = (this.cards[0].offsetWidth / this.container.offsetWidth) * 100;
    this.build();
  }

  private build(fix = 0): void {
    this.xScale = {}; // Reset mapping
    for (let i = 0; i < this.cards.length; i++) {
      const x = i - this.centerIndex;
      const scale = this.calcScale(x);
      const scale2 = this.calcScale2(x);
      const zIndex = -(Math.abs(i - this.centerIndex));
      const leftPos = this.calcPos(x, scale2);

      this.xScale[x] = this.cards[i];

      this.updateCards(this.cards[i], {
        x: x,
        scale: scale,
        leftPos: leftPos,
        zIndex: zIndex
      });
    }
  }

  // Method to handle keyboard controls
  private controller(e: KeyboardEvent): void {
    const temp: Record<number, HTMLElement> = {...this.xScale};

      if (e.keyCode === 39) {
        // Left arrow
        for (const xStr in this.xScale) {
          const x = parseInt(xStr, 10);
          const newX = (x - 1 < -this.centerIndex) ? this.centerIndex : x - 1;
          temp[newX] = this.xScale[x];
        }
      }

      if (e.keyCode === 37) {
        // Right arrow
        for (const xStr in this.xScale) {
          const x = parseInt(xStr, 10);
          const newX = (x + 1 > this.centerIndex) ? -this.centerIndex : x + 1;
          temp[newX] = this.xScale[x];
        }
      }

      this.xScale = temp;

      for (const xStr in temp) {
        const x = parseInt(xStr, 10);
        const scale = this.calcScale(x);
        const scale2 = this.calcScale2(x);
        const leftPos = this.calcPos(x, scale2);
        const zIndex = -Math.abs(x);

        this.updateCards(this.xScale[x], {
          x: x,
          scale: scale,
          leftPos: leftPos,
          zIndex: zIndex
        });
      }
  }

  // Method to calculate card position
  private calcPos(x: number, scale: number): number {
    let formula: number;

    if (x < 0) {
      formula = (scale * 100 - this.cardWidth) / 2;
      return formula;

    } else if (x > 0) {
      formula = 100 - (scale * 100 + this.cardWidth) / 2;
      return formula;
    } else {
      formula = 100 - (scale * 100 + this.cardWidth) / 2;
      return formula;
    }
  }

  // Method to update card styles
  private updateCards(card: HTMLElement, data: CardUpdateData): void {
    if (data.x !== undefined) {
      card.setAttribute("data-x", data.x.toString());
    }

    if (data.scale !== undefined) {
      card.style.transform = `scale(${data.scale})`;

      if (data.scale === 0) {
        card.style.opacity = data.scale.toString();
      } else {
        card.style.opacity = '1';
      }
    }

    if (data.leftPos !== undefined) {
      card.style.left = `${data.leftPos}%`;
    }

    if (data.zIndex !== undefined) {
      if (data.zIndex === 0) {
        card.classList.add("highlight");
      } else {
        card.classList.remove("highlight");
      }

      card.style.zIndex = data.zIndex.toString();
    }
  }

  // Methods to calculate card scale
  private calcScale2(x: number): number {
    let formula: number;

    if (x <= 0) {
      formula = 1 - (-1 / 5) * x;
      return formula;
    } else if (x > 0) {
      formula = 1 - (1 / 5) * x;
      return formula;
    }
    return 0; // Should not reach here
  }

  private calcScale(x: number): number {
    const formula = 1 - (1 / 5) * Math.pow(x, 2);

    if (formula <= 0) {
      return 0;
    } else {
      return formula;
    }
  }

  // Method to check and update card ordering
  private checkOrdering(card: HTMLElement, x: number, xDist: number): number {
    const original = parseInt(card.dataset['x'] || '0');
    const rounded = Math.round(xDist);
    let newX = x;

    if (x !== x + rounded) {
      if (x + rounded > original) {
        if (x + rounded > this.centerIndex) {
          newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex;
        }
      } else if (x + rounded < original) {
        if (x + rounded < -this.centerIndex) {
          newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex;
        }
      }
      this.xScale[newX + rounded] = card;
    }

    const tempZIndex = -Math.abs(newX + rounded);
    this.updateCards(card, { zIndex: tempZIndex });

    return newX;
  }

  // Method to move cards based on drag distance
  private moveCards(data: DragDistance | null): void {
    if (this.cards.length === 0) return;

    let xDist: number;

    if (data !== null) {
      // --- Active Drag ---
      this.container.classList.remove("smooth-return");
      xDist = data.x / 250;

      for (let i = 0; i < this.cards.length; i++) {
        const card = this.cards[i];
        const currentX = parseFloat(card.dataset['x'] || '0');

        const newX = this.checkOrdering(card, currentX, xDist);

        const targetX = newX + xDist;
        const scale = this.calcScale(targetX);
        const scale2 = this.calcScale2(targetX);
        const leftPos = this.calcPos(targetX, scale2);

        this.updateCards(card, {
          scale: scale,
          leftPos: leftPos
        });
      }
    }
    // The 'else' block for snap-back is removed.
  }


  // Override destroy from DraggingEvent to add CardCarousel specific cleanup
  public override destroy(): void {
    super.destroy(); // Call parent destroy

    window.removeEventListener("resize", this.resizeListener);
    if (this.controllerElement) {
      this.controllerElement.removeEventListener("keydown", this.keydownListener);
    }
    // console.log("CardCarousel destroyed for container:", this.container);
  }
}


// --- Angular Component ---
// (No changes needed in the component class itself)
@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements AfterViewInit, OnDestroy {

  @ViewChildren('carouselContainer') carouselContainers!: QueryList<ElementRef<HTMLElement>>;
  private carouselInstances: CardCarousel[] = [];

  ngAfterViewInit(): void {
    // console.log("OpportunitiesComponent ngAfterViewInit");
    this.initializeCarousels();
     this.carouselContainers.changes.subscribe(() => {
         this.cleanupCarousels();
         this.initializeCarousels();
     });
  }

  ngOnDestroy(): void {
    // console.log("OpportunitiesComponent ngOnDestroy");
    this.cleanupCarousels();
  }

  private initializeCarousels(): void {
    // console.log(`Found ${this.carouselContainers.length} carousel containers.`);
    this.carouselContainers.forEach((containerRef, index) => {
      const containerElement = containerRef.nativeElement;
      let controllerElement: HTMLElement | null = null;
      let nextSibling = containerElement.nextElementSibling;
      while (nextSibling) {
          if (nextSibling.matches('.card-controller')) {
              controllerElement = nextSibling as HTMLElement;
              break;
          }
          nextSibling = nextSibling.nextElementSibling;
      }
      // if (!controllerElement) {
      //    console.warn(`Controller not found for carousel container ${index + 1}`, containerElement);
      // } else {
      //    console.log(`Initializing carousel ${index + 1} with controller:`, controllerElement);
      // }
      try {
          const carousel = new CardCarousel(containerElement, controllerElement);
          this.carouselInstances.push(carousel);
      } catch (error) {
          console.error(`Failed to initialize CardCarousel ${index + 1}:`, error);
      }
    });
  }

  private cleanupCarousels(): void {
    // console.log(`Cleaning up ${this.carouselInstances.length} carousel instances.`);
    this.carouselInstances.forEach(carousel => carousel.destroy());
    this.carouselInstances = [];
  }
}