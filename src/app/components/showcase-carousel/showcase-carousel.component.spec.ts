import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseCarouselComponent } from './showcase-carousel.component';

describe('ShowcaseCarouselComponent', () => {
  let component: ShowcaseCarouselComponent;
  let fixture: ComponentFixture<ShowcaseCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});